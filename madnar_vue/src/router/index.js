import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'

import HomeView from '../views/HomeView.vue'
import Product from '../views/Product.vue'
import Login from '../views/loginNew.vue'
import Register from '../views/RegisterView.vue'
import Cart from "../views/addToCart.vue"
import Payment from "../views/PaymentVie.vue"
import MyAccount from "../views/MyAccount.vue"
import Success from "../views/Success.vue"


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/sign-up',
    name: 'signup',
    component: Register
  },
  {
    path:'/payment',
    name: 'payment',
    component: Payment
  },
  {
    path: '/log-in',
    name: 'login',
    component: Login
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/success',
    name: 'Sucess',
    component: Success
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/:category_slug/:product_slug/',
    name: 'Product',
    component: Product
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'Login', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
