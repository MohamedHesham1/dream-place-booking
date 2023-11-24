<script setup>
import { RouterView } from 'vue-router';
import NavbarItem from './layouts/NavbarItem.vue';
import FooterItem from './layouts/FooterItem.vue';
</script>

<template>
  <header>
    <NavbarItem />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <FooterItem />
  </footer>
</template>

<style scoped></style>
