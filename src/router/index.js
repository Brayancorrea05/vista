import Vue from 'vue'
import VueRouter from 'vue-router'
import vista from '@/views/vista.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: vista
  },

]

const router = new VueRouter({
  routes
})

export default router
