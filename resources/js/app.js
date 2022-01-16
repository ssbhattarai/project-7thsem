require('./bootstrap')




import { createApp } from 'vue'
import { createStore } from 'vuex'

import router from './router';
import { playlist } from './store/playList';

import ExampleComponent from './components/ExampleComponent';


const store = createStore({
	modules: {
        playlist
	}
});

const app = createApp({})
            .use(router)
            .use(store);

app.component('example-component', ExampleComponent);

app.mount('#app');
