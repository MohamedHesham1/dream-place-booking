<script setup>
defineProps({
  marginBottom: {
    type: String,
    default: 'mb-[50px]',
  },
});
</script>

<template>
  <div
    :class="`flex items-center py-[25px] w-full bg-[#FCEFCA] rounded-lg tracking-[0.32px] ${marginBottom}`"
  >
    <img
      src="@/assets/images/homePage/icon-danger.svg"
      alt=""
      class="mr-[19px] ml-6"
    />
    <p>
      Check the latest COVID-19 restrictions before you travel.
      <a href="#" class="text-primary hover:underline"> Learn more </a>
    </p>
  </div>
</template>

<style scoped></style>
