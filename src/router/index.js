import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Member_User from '@/components/Member_User'
import Product from '@/components/Product'
import BuyCar from '@/components/BuyCar'
import BuyCar_Two from '@/components/BuyCar_Two'
import BuyCar_Three from '@/components/BuyCar_Three'
import Member_Address from '@/components/Member_Address'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Member_User',
      name: 'Member_User',
      component: Member_User
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/BuyCar',
      name: 'BuyCar',
      component: BuyCar
    },
    {
      path: '/BuyCar_Two',
      name: 'BuyCar_Two',
      component: BuyCar_Two
    },
    {
        path: '/Member_Address',
        name: 'Member_Address',
        component: Member_Address
    },
    {
        path: '/BuyCar_Three',
        name: 'BuyCar_Three',
        component: BuyCar_Three
    }

  ]
})
