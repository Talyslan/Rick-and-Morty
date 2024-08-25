import { createApp } from 'vue'
import App from '@/App.vue';
import { router } from '@/router';
// CSS Links
import './styles/reset.css';
import './styles/global.css';

createApp(App)
    .use(router)
    .mount('#app');
