import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Console from '@/components/Console'
import SuperConsole from '@/components/SuperConsole'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Main
    },
    {
      path: '/console',
      name: 'Console',
      component: Console
    },
    {
      path: '/superconsole',
      name: 'SuperConsole',
      component: SuperConsole
    }
  ]
})
