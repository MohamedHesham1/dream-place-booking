<script setup>
import { RouterView } from 'vue-router';
import NavbarItem from './layouts/NavbarItem.vue';
import FooterItem from './layouts/FooterItem.vue';
</script>

<template>
  <NavbarItem />
  <main>
    <RouterView />
  </main>
  <FooterItem />
</template>

<style scoped></style>
