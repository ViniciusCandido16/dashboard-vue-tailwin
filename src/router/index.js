import { createRouter, createWebHistory } from "vue-router";

import dashboard from '../pages/master/dashboard-tail'

import home from '../pages/home-dash'
import profile from '../pages/profile-dash'

const routes = [{
    name: 'Dashboard-tail',
    path: '/',
    component: dashboard,
    children: [

        {
            name: 'home-dash',
            path: '/home-dash',
            component: home,
        },
        {
            name: 'profile-dash',
            path: '/profile-dash',
            component: profile,
        }
    ]
}, ];
const router = Router();
export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}