require('./bootstrap')




import { createApp } from 'vue'

import router from './router';
import { playlist } from './store/playList';

import Layout from './components/Layouts';

import { createPinia } from "pinia";




const app = createApp({})
            .use(createPinia())
            .use(router);
            // .use(store);

app.component('example-component', Layout);

app.mount('#app');
