import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 异步组件，项目比较小的时候没有必要这样做
      // component: () => import('@/pages/home/Home')
      component: Home
    },
    {
      path: '/city',
      // component: () => import('@/pages/city/City')
      component: City
    },
    {
      path: '/detail/:id',
      // component: () => import('@/pages/detail/Detail')
      component: Detail
    }
  ],
  // 这个用来设置每次进入新的路由都从滚动到最开始
  // 说是比如在home页面滚动到下面一点的地方，然后进入新的路由，
  // 会发现这个页面滚动到下面某个地方了
  // 但是我这边没加这个好像也没问题
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
