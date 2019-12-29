<template>
  <div class="container">
    <home-header :city='city'></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconList='iconList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

import { getHomeData } from '@/api/api'
export default {
  data () {
    return {
      city: '',
      swiperList: [],
      recommendList: [],
      weekendList: [],
      iconList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  created () { // 调用请求菜单列表数据的接口
    getHomeData().then(res => {
      console.log(res)
      let data = res.data.homeData
      this.city = data.city
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
      // const TODOS = res.data.todos // 数据都会返回在res.data里面。
      // this.items = TODOS // 我的把菜单数据赋值给定义的this.items
      // this.todoId = TODOS[0].id // 把菜单数据的默认的第一个对象的id赋值给默认选中的id
    })
  }
  // methods: {
  //   goList(id) { // 点击菜单时候,替换选中id
  //     this.todoId = id;
  //   },
  //   addTodoList() { // 点击新增按钮时候
  //   // 调用新增菜单的接口，在接口调用成功在请求数据
  //     addTodo({}).then(data => {
  //       getTodoList({}).then(res => {
  //         const TODOS = res.data.todos;
  //         this.todoId = TODOS[TODOS.length - 1].id;
  //         this.items = TODOS;
  //       });
  //     });
  //   }
  // }
}
</script>

<style scoped lang='less'>

</style>
