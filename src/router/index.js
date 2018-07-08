import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import UserInfo from '@/components/UserInfo'
import Chart from '@/components/Chart'
import fileUpload from '@/components/fileUpload'
import Message from '@/components/Message'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/userinfo',
      children: [
        {
          path: '/home/userinfo',
          name: 'UserInfo',
          component: UserInfo
        },
        {
          path: '/home/chart',
          name: 'Chart',
          component: Chart
        },
        {
          path: '/home/fileupload',
          name: 'fileUpload',
          component: fileUpload
        },
        {
          path: '/home/message',
          name: 'Message',
          component: Message
        }
      ]
    }
  ]
})
