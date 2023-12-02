<script setup>
import { computed } from 'vue';

const props = defineProps({
  radioId: {
    type: Number,
    required: true,
  },
});

const calculateValue = computed(() => {
  return props.radioId === 1
    ? '0 - 200'
    : props.radioId === 2
    ? '200 - 500'
    : props.radioId === 3
    ? '500 - 1000'
    : props.radioId === 4
    ? '1000 - 2000'
    : props.radioId === 5
    ? '2000 - 5000'
    : '';
});
</script>

<template>
  <li class="flex items-center gap-2 mb-[14px]">
    <input
      type="radio"
      name="price-filter"
      :id="`price-filter${radioId}`"
      :value="calculateValue"
      class="w-5 h-5 hidden peer"
      @click="console.log(calculateValue)"
    />
    <label
      :for="`price-filter${radioId}`"
      class="relative flex items-center justify-center peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-blue-500 rounded overflow-hidden"
    >
      <span class="bg-blue-500 w-2.5 h-2.5"></span>
    </label>
    <label
      class="text-gray-1 text-sm tracking-[0.28px]"
      :for="`price-filter${radioId}`"
    >
      $ {{ calculateValue }}
    </label>
  </li>
</template>

<style scoped></style>
