import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // ルーターをインポート

const app = createApp(App);

app.use(router); // ルーターを使用

app.mount('#app');
