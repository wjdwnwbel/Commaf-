import { createRouter, createWebHistory } from "vue-router";
import ListView from "../components/ListVue.vue";
import ItemView from "../components/item/ItemVue.vue";
import HomePage from "../components/HomePage.vue";
import QuizView from "../components/quiz/QuizView.vue";
import QuizStart from "../components/quiz/QuizStart.vue";
import ResultView from "../components/quiz/ResultView.vue";
import AdminLoginView from "../components/admin/loginView.vue";

const routes = [ 
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: HomePage
    },
    {
        path: '/start',
        name: 'start',
        component: QuizStart
    },
    {
        path: '/quiz',
        name: 'quiz',
        component: QuizView
    },
    {
        path: '/items',
        name: 'items',
        component: ListView
    },
    {
        path: '/item/:name',
        name: 'item',
        component: ItemView
    },
    {
        path: '/result',
        name: 'result',
        component: ResultView
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminLoginView
    }

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    }
});

export default router;