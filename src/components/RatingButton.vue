<script setup>
defineProps({
  ratingId: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <li class="border-r border-gray-5">
    <input
      type="radio"
      name="star-rating"
      :id="`star-rating${ratingId}`"
      :value="ratingId"
      class="hidden w-full h-full p-3"
      @click="console.log($event.target.value)"
    />
    <label
      class="flex gap-[1px] py-[14px] pl-[14px] pr-[9px] cursor-pointer"
      :for="`star-rating${ratingId}`"
    >
      <span> {{ ratingId }} </span>
      <img src="@/assets/images/icon-star.svg" alt="" />
    </label>
  </li>
</template>

<style scoped>
input:checked + label {
  background-color: #2196f3; /* replace with your primary color */
  color: #fff; /* replace with the desired text color */
}
</style>
