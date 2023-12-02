<script setup>
import AppButton from '@/components/AppButton.vue';
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const passwordsMatch = ref(true);
const userStore = useUserStore();
const router = useRouter();
const passwordError = ref('');

const validatePassword = () => {
  passwordError.value = '';
  if (password.value.length < 8) {
    passwordError.value = 'Password must be at least 8 characters long';
    return;
  }
  if (!/[a-z]/.test(password.value)) {
    passwordError.value = 'Password must contain at least one lowercase letter';
    return;
  }
  if (!/[A-Z]/.test(password.value)) {
    passwordError.value = 'Password must contain at least one uppercase letter';
    return;
  }
  if (!/\d/.test(password.value)) {
    passwordError.value = 'Password must contain at least one number';
    return;
  }
};
const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    passwordsMatch.value = false;
    return;
  }

  try {
    await userStore.register(email.value, password.value);
    console.log('User registered successfully');
    router.push('/');
  } catch (error) {
    console.error('Error registering user:', error);
  }
};
</script>

<template>
  <div class="max-w-[400px] mt-[92px] mx-auto">
    <h1 class="text-secondary text-center text-3xl font-bold mb-16">
      Register
    </h1>
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
      <input
        class="px-3 pt-[11px] pb-3 bg-gray-6 mb-5 rounded"
        id="password"
        v-model="password"
        type="password"
        required
        @input="validatePassword"
      />
      <p v-if="passwordError" class="text-red">{{ passwordError }}</p>

      <label
        class="text-secondary text-xs font-medium tracking-[0.28px] mb-1"
        for="confirm-password"
        >Confirm Password:</label
      >
      <input
        class="px-3 pt-[11px] pb-3 bg-gray-6 mb-5 rounded"
        id="confirm-password"
        v-model="confirmPassword"
        type="password"
        required
      />
      <p v-if="!passwordsMatch" class="text-red-500">Passwords do not match.</p>
      <AppButton>Submit</AppButton>
    </form>
  </div>
</template>

<style scoped></style>
