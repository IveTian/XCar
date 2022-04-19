import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import loginPage from '@/components/loginPage'
import newsPage from '@/components/newsPage'
import aboutPage from '@/components/aboutPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage
    },
    {
      path: '/newsPage',
      name: 'newsPage',
      component: newsPage
    },
    {
      path: '/aboutPage',
      name: 'aboutPage',
      component: aboutPage
    }
  ]
})
