import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/Layout'),
    redirect:'/home',
    children:[
      { path:'/home', component: () => import('@/views/Home')},
      { path:'/form', component: () => import('@/views/Form')},
      { path:'/table', component: () => import('@/views/Table')},
      { path:'/excel', component: () => import('@/views/Excel')},
      { path:'/editor', component: () => import('@/views/Editor')},
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
