<script setup>
import { RouterView } from 'vue-router';
import NavbarItem from './layouts/NavbarItem.vue';
</script>

<template>
  <header>
    <NavbarItem />
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped></style>
