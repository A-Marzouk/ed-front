import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/DashboardView.vue')
        },
        {
            path: '/teachers',
            name: 'teachers',
            component: () => import('../views/TeachersView.vue')
        },
        {
            path: '/students',
            name: 'students',
            component: () => import('../views/StudentsView.vue')
        },
        {
            path: '/classes',
            name: 'classes',
            component: () => import('../views/ClassesView.vue')
        },
        {
            path: '/coaches',
            name: 'coaches',
            component: () => import('../views/CoachesView.vue')
        },
        {
            path: '/resources',
            name: 'resources',
            component: () => import('../views/ResourcesView.vue')
        }
    ]
})

export default router
