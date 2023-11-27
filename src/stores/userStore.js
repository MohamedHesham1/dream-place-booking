import { v4 as uuidv4 } from 'uuid';
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [],
    user: null,
    token: null,
  }),
  actions: {
    register(email, password) {
      const newUser = { id: uuidv4(), email, password };
      this.users.push(newUser);
    },
    signIn(email, password) {
      const user = this.users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        this.user = user;

        // Encode user information to create a basic token using btoa()
        const tokenString = `${user.id}:${user.email}`;
        this.token = btoa(tokenString);

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', this.token);
      }
    },
    signOut() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    loadFromLocalStorage() {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if (user && token) {
        this.user = JSON.parse(user);
        this.token = token;
      }
    },
  },
});
