<script setup>
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
  <div
    class="flex items-end px-5 pb-5 text-white h-[280px] rounded-lg max-w-[400px]"
    :style="{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <a href="#" class="hover:underline">
      <h3 class="font-semibold text-xl mb-[6px]">{{ title }}</h3>
      <p class="text-sm tracking-[0.28px]">{{ description }}</p>
    </a>
  </div>
</template>

<style scoped></style>
