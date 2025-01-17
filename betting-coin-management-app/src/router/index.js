import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
  }
];

console.log(Array.isArray(routes));  // true と表示されるはず
console.log(routes);

routes.forEach(route => {
  console.log(`ルート: ${JSON.stringify(route)}`);
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
