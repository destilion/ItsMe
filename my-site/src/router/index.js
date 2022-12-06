import { createWebHistory, createRouter } from 'vue-router';
import home from '@/components/HomeComponent.vue'
import resume from '@/components/ResumeComponent.vue'
import projects from '@/components/ProjectsComponent.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/Resume',
        name: 'resume',
        component: resume
    },
    {
        path: '/Projects',
        name: 'projects',
        component: projects
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router