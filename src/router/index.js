import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/Sign_in.vue'
import SignUp from '../views/Sign_up.vue'
import Dashboard from '../views/Dashboard.vue'
import MyNotes from '../views/My_notes.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/signin'
  },

  {
    path: '*',
    redirect: '/signin'
  },

  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },

  {
    path: '/mynotes',
    name: 'myNotes',
    component: MyNotes
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
      hideNavigation: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/signin')
  else if (!requiresAuth && currentUser) next('/dashboard')
  else next()
})

export default router
