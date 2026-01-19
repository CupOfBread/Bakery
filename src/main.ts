import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';
import { Icon } from '@iconify/vue';
import './style.css';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import App from './App.vue';
import zhCN from './locales/zh-CN';
import en from './locales/en';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en',
  messages: {
    'zh-CN': zhCN,
    en: en,
  },
});

const app = createApp(App);

app.component('Icon', Icon);

app.use(pinia).use(router).use(i18n).mount('#app');
