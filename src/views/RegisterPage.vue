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
const showPassword = ref(false);

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
      <div class="relative mb-5 px-3 pt-[11px] pb-3 bg-gray-6 rounded">
        <input
          class="w-full bg-gray-6"
          id="password"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          required
          @input="validatePassword"
        />
        <img
          src="@/assets/images/icon-eye.svg"
          alt="Email Icon"
          @click="showPassword = !showPassword"
          class="absolute right-3 top-1/2 transform -translate-y-1/2"
        />
      </div>
      <p v-if="passwordError" class="text-red">{{ passwordError }}</p>

      <label
        class="text-secondary text-xs font-medium tracking-[0.28px] mb-1"
        for="confirm-password"
        >Confirm Password:</label
      >
      <div class="relative mb-5 px-3 pt-[11px] pb-3 bg-gray-6 rounded">
        <input
          class="w-full bg-gray-6"
          id="confirm-password"
          v-model="confirmPassword"
          :type="showPassword ? 'text' : 'password'"
          required
        />
        <img
          src="@/assets/images/icon-eye.svg"
          alt="Email Icon"
          @click="showPassword = !showPassword"
          class="absolute right-3 top-1/2 transform -translate-y-1/2"
        />
      </div>
      <p v-if="!passwordsMatch" class="text-red-500">Passwords do not match.</p>
      <AppButton>Submit</AppButton>

      <p class="text-secondary mt-3 text-sm font-medium">
        Already have an account?
        <router-link class="text-primary" to="/login"> Sign in</router-link>
      </p>
    </form>
  </div>
</template>

<style scoped></style>
