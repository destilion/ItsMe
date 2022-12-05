import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import resume from '@/components/resume'
import projects from '@/components/projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
})
