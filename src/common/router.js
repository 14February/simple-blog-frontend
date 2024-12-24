import {createRouter, createWebHashHistory} from 'vue-router';

let routes = [
    {path: "/test", component: () => import("../views/Test.vue")},
    {path: "/login", component: () => import("../views/login.vue")},
    {path: "/dashboard", component: () => import("../views/dashboard/Dashboard.vue")}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export {routes, router};