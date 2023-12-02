<script setup>
import { computed } from 'vue';

const props = defineProps({
  totalPages: Number,
  currentPage: Number,
});

const emit = defineEmits(['pageChanged']);

const changePage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('pageChanged', page);
  }
};

const pagination =
  (count, ellipsis = '…') =>
  (page, total) => {
    const start = Math.max(
      1,
      Math.min(page - Math.floor((count - 3) / 2), total - count + 2)
    );
    const end = Math.min(
      total,
      Math.max(page + Math.floor((count - 2) / 2), count - 1)
    );
    return [
      ...(start > 2 ? [1, ellipsis] : start > 1 ? [0] : []),
      ...range(start, end + 1),
      ...(end < total - 1 ? [ellipsis, total] : end < total ? [total] : []),
    ];
  };

const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
const pages = computed(() => {
  return pagination(6)(props.currentPage, props.totalPages);
});
</script>

<template>
  <div class="flex justify-center items-center">
    <button @click="changePage(1)" :disabled="currentPage === 1" class="mx-2">
      First
    </button>
    <button
      @click="changePage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="mx-2"
    >
      Previous
    </button>
    <div v-for="page in pages" :key="page">
      <button
        @click="changePage(page)"
        :class="{ 'bg-blue-500 text-white': page === currentPage }"
        class="mx-2"
      >
        {{ page }}
      </button>
    </div>
    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="mx-2"
    >
      Next
    </button>
    <button
      @click="changePage(totalPages)"
      :disabled="currentPage === totalPages"
      class="mx-2"
    >
      Last
    </button>
  </div>
</template>

<style scoped></style>
