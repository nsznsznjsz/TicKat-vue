import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from '@/layouts/default.vue'
import LoginLayout from '@/layouts/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: DefaultLayout,
      children: [
        {
          path: '',
          alias: '/index',
          name: 'Index',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('@/views/home/about.vue')
        },
        {
          path: '/group',
          name: 'Group',
          component: () => import('@/views/group/index.vue')
        },
        {
          path: '/square',
          name: 'Square',
          component: () => import('@/views/square/index.vue')
        },
        // user
        {
          path: '/user/profile',
          alias: '/user',
          name: 'User',
          component: () => import('@/views/user/index.vue')
        },
        // Error Page
        {
          path: '/401',
          name: 'NotAuth',
          component: () => import('@/views/error/401.vue')
        },
        {
          path: '/404',
          name: 'NotFound',
          component: () => import('@/views/error/404.vue')
        }
      ]
    },
    {
      path: '',
      component: LoginLayout,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/user/login.vue')
        },
        {
          path: '/signup',
          name: 'Signup',
          component: () => import('@/views/user/signup.vue')
        },
        {
          path: '/UserLicense',
          name: 'UserLicense',
          component: () => import('@/views/user/license.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: { name: 'NotFound' }
    }
  ]
})