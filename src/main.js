import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import antd from 'ant-design-vue/es';

const app = createApp(App);
app.use(antd);
app.mount('#app');
