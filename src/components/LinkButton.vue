<script setup>
import { defineProps } from 'vue';

defineProps({
  route: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <router-link
    class="bg-primary border border-solid border-primary rounded-md text-white text-[0.9375rem] font-medium text-center py-[10px] px-[18px] hover:bg-transparent hover:text-primary transition-colors"
    :to="route"
  >
    <slot></slot>
  </router-link>
</template>

<style scoped></style>
