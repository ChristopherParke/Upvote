import {createRouter, createWebHistory } from 'vue-router'

import Upvote from "../components/Upvote.vue";

const routes = [
    {
        path: '/',
        name: 'Upvote',
        component: Upvote,
    }
]

const router = createRouter({
    history :createWebHistory(),
    routes,
})

export default router