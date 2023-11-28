<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import LinkButton from '../components/LinkButton.vue';

const route = useRoute();
const showNavigation = computed(() => {
  return route.path !== '/register' && route.path !== '/login';
});

const isSearchPage = computed(() => {
  return route.name === 'Search Results';
});
</script>

<template>
  <header>
    <nav class="flex flex-wrap justify-between max-w-[1240px] mx-auto py-6">
      <router-link to="/" class="flex items-center">
        <img src="@/assets/images/homePage/icon-plane.svg" alt="" />
        <span
          :class="[
            'ml-3',
            'text-lg',
            'font-semibold',
            isSearchPage ? 'text-white' : 'text-[#1B1F2D]',
          ]"
          >my Dream Place</span
        >
      </router-link>
      <div class="contents" v-if="showNavigation">
        <ul
          :class="`flex flex-wrap gap-12 items-center justify-center ${
            isSearchPage ? 'text-white' : 'text-gray-1'
          }`"
        >
          <li class="hover:underline">
            <a href="#">Home</a>
          </li>
          <li class="hover:underline">
            <a href="#">Discover</a>
          </li>
          <li class="hover:underline">
            <a href="#">Activities</a>
          </li>
          <li class="hover:underline">
            <a href="#">About</a>
          </li>
          <li class="hover:underline">
            <a href="#">Contact</a>
          </li>
        </ul>
        <LinkButton route="/login">Login</LinkButton>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
