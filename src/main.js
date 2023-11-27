import './assets/styles/global.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useUserStore } from './stores/userStore';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Load user session from local storage
const userStore = useUserStore();
userStore.loadFromLocalStorage();

app.mount('#app');
