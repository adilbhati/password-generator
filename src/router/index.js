import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../Home.vue';
import PasswordGenerator from '../components/PasswordGenerator.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/password-generator',
    name: 'PasswordGenerator',
    component: PasswordGenerator,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
