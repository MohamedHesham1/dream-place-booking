<script setup>
import NavButton from '../components/LinkButton.vue';
</script>

<template>
  <nav class="flex flex-wrap justify-between mx-[100px] py-6">
    <router-link to="/" class="flex items-center">
      <img src="@/assets/images/homePage/icon-plane.svg" alt="" />
      <span class="ml-3 text-lg font-semibold text-[#1B1F2D]"
        >my Dream Place</span
      >
    </router-link>
    <ul
      class="flex flex-wrap gap-12 items-center text-base justify-center text-gray-1"
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
    <NavButton route="/login">Login</NavButton>
  </nav>
</template>

<style scoped></style>
