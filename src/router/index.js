import {createRouter, createWebHistory} from 'vue-router'
import Home from "../pages/Home.vue";
import SignUp from "../pages/SignUp.vue";

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/signup',
        component: SignUp,
        name: 'sign_up'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router