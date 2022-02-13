import { createRouter, createWebHistory } from 'vue-router';

import AuthenticationMiddleware from './middleware/authentication';
import NotFound from '../pages/NotFound';
import Home from '../pages/home.vue';
import Login from '../pages/Login.vue'
import User from '../pages/User.vue'

const routes = [
    {
        path: '/',
        name: "Home",
        component:Home,
        meta: {
            authenticated: false,
        },
    },
    {
        path: '/login',
        name: "Login",
        component:Login,
        meta: {
            authenticated: false,
        },
    },
    {
        path: '/profile',
        name: "profile",
        component:User,
        meta: {
            authenticated: true,
        },
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(AuthenticationMiddleware);

export default router;
