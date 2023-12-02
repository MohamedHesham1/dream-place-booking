import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/userStore';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import SearchResultsPage from '../views/SearchResultsPage.vue';
import HotelDetailsPage from '../views/HotelDetailsPage.vue';

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
    {
      path: '/search-results',
      name: 'Search Results',
      component: SearchResultsPage,
    },
    {
      path: '/hotel-details/:id/:checkInDate/:checkOutDate',
      name: 'Hotel Details',
      component: HotelDetailsPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if ((to.name === 'Login' || to.name === 'Register') && userStore.user) {
    // If the user is logged in and tries to access the login or register page,
    // redirect them to the home page
    next({ name: 'Home' });
  } else if (
    to.name === 'Search Results' &&
    Object.keys(to.query).length === 0
  ) {
    // If the user tries to access the search page without any search parameters,
    // redirect them to the home page
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
