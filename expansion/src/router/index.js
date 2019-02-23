import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Expansion from '@/components/Expansion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Expansion',
      component: Expansion
    }
  ]
})
