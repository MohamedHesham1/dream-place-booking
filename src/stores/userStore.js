import { auth } from '@/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { defineStore } from 'pinia';
const localStorageKey = 'user';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async register(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        this.setUser(user);
      } catch (error) {
        console.error(error.message);
        throw new Error('Failed to register');
      }
    },

    async signIn(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        this.setUser(user);
      } catch (error) {
        console.error(error.message);
        throw new Error('Failed to sign in');
      }
    },

    async signOut() {
      await signOut(auth);
      this.clearUser();
    },

    setUser(user) {
      this.user = user;
      user.getIdToken().then((token) => {
        this.token = token;

        localStorage.setItem(localStorageKey, JSON.stringify({ user, token }));
      });
    },

    clearUser() {
      this.user = null;
      this.token = null;

      localStorage.removeItem(localStorageKey);
    },

    loadFromLocalStorage() {
      const data = localStorage.getItem(localStorageKey);
      if (data) {
        const { user, token } = JSON.parse(data);
        this.user = user;
        this.token = token;
      }
    },

    // Helper function to generate a token from user data
    generateToken(user) {
      return btoa(`${user.uid}:${user.email}`);
    },
  },
});
