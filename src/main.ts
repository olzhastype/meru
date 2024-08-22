import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import '@/assets/styles.scss';
import '@/assets/tailwind.css';
import 'primeicons/primeicons.css';
import { createPinia } from 'pinia';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Rating from 'primevue/rating';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.component('Button', Button);
app.component('Card', Card);
app.component('Rating', Rating);

app.mount('#app');
