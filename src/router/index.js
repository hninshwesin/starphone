import Vue from 'vue'
import VueRouter from 'vue-router'

import Contact from "@/views/Contact";
import About from "@/views/About";
import Homepage from "@/components/dashboard/Homepage";
import Home from "@/views/Home";
import Preview from "@/views/Preview";
import signIn from "@/components/auth/signIn";
import signup from "@/components/auth/signup";
import store from "@/store";
import Template from "@/views/Template";
import BrandName from "@/components/BrandName";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/create',
      name: 'Homepage',
      component: Homepage,
      beforeEnter (to, from, next) {
        if (store.state.token) {
          next()
        } else {
          next('/signIn')
        }
      }
    },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    },
    {
      path: '/signup',
      name: 'Signup',
      component: signup
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: signIn
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    },
    {
      path: '/brandName',
      name: 'brandName',
      component: BrandName
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
