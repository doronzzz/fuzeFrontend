import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AllProducts from './components/AllProducts.vue'
import Product from './components/Product.vue'
import Cart from './components/Cart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/all-products',
      name: 'All Products',
      component: AllProducts
    },
    {
      path: '/product/:id',
      name: 'Product Page',
      component: Product
    },
    {
      path: '/cart',
      name: 'Cart Page',
      component: Cart
    },
    {
      path: '/help',
      name: 'help',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "help" */ './views/Help.vue')
    }
  ]
})
