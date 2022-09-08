import Vue from 'vue'
import VueRouter from 'vue-router'
import Notfound from '../views/Notfound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from "../views/Restaurants.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: Restaurants
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-tops',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import( '../views/SignUp.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: Notfound
  },
]

const router = new VueRouter({
  linkExactActiveClass:'active',
  routes
})

export default router
