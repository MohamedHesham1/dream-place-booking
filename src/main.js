import '@/assets/styles/global.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { useUserStore } from '@/stores/userStore';
import App from './App.vue';
import router from './router';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);

// Load user session from local storage
const userStore = useUserStore();
userStore.loadFromLocalStorage();

app.mount('#app');
