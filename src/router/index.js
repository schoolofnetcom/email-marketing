import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/auth/Login'
import store from '@/states'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  let requiresAuth = to.meta.requiresAuth || false

  let token = store.state.user.token

  if (token) {
    window.axios.defaults.headers.common['Authorization'] = 'bearer ' + token
  }

  if (requiresAuth) {
    return store.dispatch('getCurrentUser')
      .then(() => {
        return next()
      })
      .catch(() => {
        return next({path: 'login'})
      })
  }
  return next()
})
