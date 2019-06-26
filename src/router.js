import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Resources from './views/Resources.vue'
import PhoneMeetings from './views/PhoneMeetings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources
    },
    {
      path: '/phonemeetings',
      name: 'phonemeetings',
      component: PhoneMeetings
    }
  ]
})
