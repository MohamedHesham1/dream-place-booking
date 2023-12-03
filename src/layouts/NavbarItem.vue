<script setup>
import AppLink from '@/components/AppLink.vue';
import { useUserStore } from '@/stores/userStore';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userStore = useUserStore();

const dropdownVisible = ref(false);

const dropdownContainer = ref(null);

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const handleClickOutside = (event) => {
  if (
    dropdownContainer.value &&
    !dropdownContainer.value.contains(event.target)
  ) {
    dropdownVisible.value = false;
  }
};

const showNavigation = computed(() => {
  return route.path !== '/register' && route.path !== '/login';
});

const isSearchPage = computed(() => {
  return route.name === 'Search Results';
});

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header>
    <nav class="flex flex-wrap justify-between max-w-[1240px] mx-auto py-6">
      <router-link to="/" class="flex items-center">
        <img
          :class="isSearchPage ? 'white-icon' : ''"
          src="@/assets/images/homePage/icon-plane.svg"
          alt=""
        />
        <span
          :class="[
            'ml-3',
            'text-lg',
            isSearchPage ? 'text-white' : 'text-[#1B1F2D]',
          ]"
          >my Dream Place</span
        >
      </router-link>
      <div class="contents" v-if="showNavigation">
        <ul
          :class="`flex flex-wrap gap-12 font-normal items-center justify-center ${
            isSearchPage ? 'text-white' : 'text-gray-1'
          }`"
        >
          <li class="hover:underline">
            <a href="#">Home</a>
          </li>
          <li class="hover:underline">
            <a href="#">Discover</a>
          </li>
          <li class="hover:underline">
            <a href="#">Activities</a>
          </li>
          <li class="hover:underline">
            <a href="#">About</a>
          </li>
          <li class="hover:underline">
            <a href="#">Contact</a>
          </li>
        </ul>

        <div v-if="userStore.user" class="flex items-center gap-4">
          <img src="@/assets/images/icon-notification.svg" alt="" />
          <div class="relative" ref="dropdownContainer">
            <button @click="toggleDropdown" class="focus:outline-none">
              <img src="@/assets/images/icon-avatar.svg" alt="Avatar" />
            </button>
            <div
              v-show="dropdownVisible"
              class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Settings</a
              >
              <button
                @click="userStore.signOut"
                class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <AppLink v-else route="/login">Login</AppLink>
      </div>
    </nav>
  </header>
  <div
    v-if="isSearchPage"
    class="w-full absolute top-0 -z-50 h-[200px] bg-[linear-gradient(180deg,#2969BF,#144E9D)]"
  ></div>
</template>

<style scoped>
.white-icon {
  filter: brightness(0) invert(1);
}
</style>
