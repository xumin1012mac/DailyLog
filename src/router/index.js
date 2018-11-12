import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Message from '@/pages/message/Message'
import WishList from '@/pages/wishList/WishList'
import Pictures from '@/pages/picture/Pictures'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/message',
    name: 'Message',
    component: Message
  },
    {
      path: '/wish',
      name: 'WishList',
      component: WishList
    },
    {
      path: '/pictures',
      name: 'Pictures',
      component: Pictures
    }]
  /*scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }*/
})
