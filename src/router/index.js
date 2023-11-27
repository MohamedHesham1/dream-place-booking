import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import { useUserStore } from '../stores/userStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if ((to.name === 'Login' || to.name === 'Register') && userStore.user) {
    // If the user is logged in and tries to access the login or register page,
    // redirect them to the home page
    next({ name: 'Home' });
  } else {
    next();
  }
});
export default router;
