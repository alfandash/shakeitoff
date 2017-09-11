import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Player1 from '@/components/player1'
import Player2 from '@/components/player2'
import Watcher from '@/components/watcher'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/player1',
      component: Player1
    },
    {
      path: '/player2',
      component: Player2
    },
    {
      path: '/watcher',
      component: Watcher
    }
  ]
})
