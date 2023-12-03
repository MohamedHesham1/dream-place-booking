<script setup>
import AppButton from '@/components/AppButton.vue';
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const userStore = useUserStore();
const router = useRouter();
const currentQuery = router.currentRoute.value.query;
console.log(currentQuery);
const handleSubmit = async () => {
  try {
    await userStore.signIn(email.value, password.value);
    successMessage.value = 'User signed in successfully';

    router.push({ name: 'Search Results', query: currentQuery });
  } catch (error) {
    errorMessage.value = 'Wrong username or password.';
    console.error('Error signing in user:', error);
  }
};
</script>

<template>
  <div class="max-w-[400px] mt-[92px] mx-auto">
    <h1 class="text-secondary text-center text-3xl font-bold mb-16">Sign in</h1>
    <form @submit.prevent="handleSubmit" class="flex flex-col">
      <label
        class="text-secondary text-xs font-medium tracking-[0.28px] mb-1"
        for="email"
        >Email:</label
      >
      <input
        class="px-3 pt-[11px] pb-3 bg-gray-6 mb-5 rounded"
        id="email"
        v-model="email"
        type="email"
        required
      />

      <label
        class="text-secondary text-xs font-medium tracking-[0.28px] mb-1"
        for="password"
        >Password:</label
      >
      <div class="relative mb-5 px-3 pt-[11px] pb-3 bg-gray-6 rounded">
        <input
          class="w-full bg-gray-6"
          id="password"
          v-model="password"
          type="password"
          required
          @input="validatePassword"
        />
        <img
          src="@/assets/images/icon-eye.svg"
          alt="Email Icon"
          class="absolute right-3 top-1/2 transform -translate-y-1/2"
        />
      </div>

      <p v-if="errorMessage" class="text-red">{{ errorMessage }}</p>
      <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>
      <AppButton>Submit</AppButton>

      <p class="text-secondary mt-3 text-sm font-medium">
        Don't have an account?
        <router-link class="text-primary" to="/register"> Sign up</router-link>
      </p>
    </form>
  </div>
</template>

<style scoped></style>
