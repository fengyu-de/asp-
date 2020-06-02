import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home',
    name: 'Home',
  },
  {
    path: "/home",
    component: () => import('@/views/Home/index'),
    children: [{
        path: '/home',
        redirect: '/home/hot'
      },
      {
        path: 'hot',
        component: () => import('@/views/home-hot/index')
      },
      {
        path: 'scenery',
        component: () => import('@/views/home-scenery/index')
      },
      {
        path: 'game',
        component: () => import('@/views/home-game/index')
      },
      {
        path: 'rests',
        component: () => import('@/views/home-rests/index')
      }, {
        path: 'cartoon',
        component: () => import('@/views/home-cartoon/index')
      },
      {
        path: 'city',
        component: () => import('@/views/home-city/index')
      },
      {
        path: 'animal',
        component: () => import('@/views/home-animal/index')
      },
      {
        path: 'girl',
        component: () => import('@/views/home-girl/index')
      }
    ]
  },
  {
    path: "/articleinfo",
    name: 'ArticleInfo',
    component: () => import('@/views/articleinfo/index')
  },
  {
    path: '/mine',
    component: () => import("@/views/mine/index")
  }
]

const router = new VueRouter({
  routes
})

export default router
