<script setup>
defineProps({
  paddingY: {
    type: String,
    default: 'py-[12px]',
  },
  width: { type: String },
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <button
    :class="`bg-primary border border-solid border-primary text-white transition-colors font-medium px-[18px] rounded-md hover:bg-transparent hover:text-primary ${width} ${paddingY}`"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
