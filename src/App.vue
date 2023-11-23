<script setup>
import { RouterView } from 'vue-router';
import Navbar from './layouts/Navbar.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped></style>
