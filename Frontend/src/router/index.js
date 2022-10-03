import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import EventList from "../views/EventList.vue"
import CategoryList from "../views/CategoryList.vue"
import UserList from "../views/UserList.vue"
import AboutUs from "../views/AboutUs.vue"
import LoginUser from "../components/LoginUser.vue"
import NotFound from "../views/NotFound.vue";
import SignUp from "../components/SignupUser.vue";

const history = createWebHistory(import.meta.env.VITE_BASE_URL)
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/event',
        name: 'eventList',
        component: EventList,
    },
    {
        path: '/category',
        name: 'categoryList',
        component: CategoryList,
    },
    {
        path: '/user',
        name: 'userList',
        component: UserList,
    },
    {
        path: '/aboutus',
        name: 'aboutUs',
        component: AboutUs
    },
    {
        path: '/login',
        name: 'loginUser',
        component: LoginUser
    },
    {
        path: '/:catchNotMatchPath(.*)',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '/signup',
        name: 'signupUser',
        component: SignUp,
    }
]

const router = createRouter({history,routes})
export default router