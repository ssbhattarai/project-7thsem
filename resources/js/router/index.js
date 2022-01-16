import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/home';
import Test from '../components/Test';


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/test',
        name: 'eg',
        component: Test
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
});
