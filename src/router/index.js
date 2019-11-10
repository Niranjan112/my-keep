import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/Sign_in.vue'
import SignUp from '../views/Sign_up.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signin',
    component: SignIn
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  routes
})

export default router
