import {createRouter, createWebHistory} from 'vue-router'
import Home from "../pages/Home.vue";
import SignUp from "../pages/SignUp.vue";
import PropertyView from "../pages/PropertyView.vue";

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
    },
    {
        path: '/property_view/:property_id',
        component: PropertyView,
        name: 'property_view',
        props: true
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router