require('./bootstrap')




import { createApp } from 'vue'
import router from './router';

import ExampleComponent from './components/ExampleComponent';


const app = createApp({}).use(router);

app.component('example-component', ExampleComponent);

app.mount('#app');
