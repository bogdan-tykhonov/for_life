import { createApp } from 'vue';
import App from './App.vue';
import vClickOutside from 'click-outside-vue3';
import Maska from 'maska';
import {router} from './router';
import i18n from './i18n';


const app = createApp(App).use(i18n).use(router).use(vClickOutside).use(Maska);
app.mount('#app');

