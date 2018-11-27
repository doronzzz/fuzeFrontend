import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Collections from './components/Collection.vue'
import CardDeck from './components/CardDeck.vue'
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
<<<<<<< HEAD
      path: '/collection',
      name: 'collection',
      component: CardDeck
=======
      path: '/all-products',
      name: 'All Products',
      component: AllProducts
>>>>>>> c746fa9c4c776a82252818dc17cd2909abea93a8
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
