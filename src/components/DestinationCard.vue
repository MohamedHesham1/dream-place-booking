<script setup>
import { defineProps } from 'vue';

defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="text-secondary max-w-[295px]">
    <a href="#" class="hover:underline">
      <img :src="imageUrl" alt="View of an iconic landmark" class="mb-[14px]" />
      <h3 class="font-semibold text-xl mb-[6px]">{{ title }}</h3>
      <p class="text-sm tracking-[0.28px]">{{ description }}</p>
    </a>
  </div>
</template>

<style scoped></style>
