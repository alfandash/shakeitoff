import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Shakeit from '@/components/Shakeit'
import Shakeit2 from '@/components/Shakeit2'
import Watcher from '@/components/Watcher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/shake',
      component: Shakeit
    },
    {
      path: '/shake-2',
      component: Shakeit2
    },
    {
      path: '/watcher',
      component: Watcher
    }
  ]
})
