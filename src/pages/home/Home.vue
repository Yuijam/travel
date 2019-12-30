<template>
  <div class="container">
    <home-header></home-header>
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
import { mapState } from 'vuex'

export default {
  data () {
    return {
      swiperList: [],
      recommendList: [],
      weekendList: [],
      iconList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    setHomeData (res) {
      let data = res.data.homeData
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
    }
  },
  mounted () {
    getHomeData({ city: this.city }).then(res => {
      this.setHomeData(res)
    })
  },
  // 包裹了keep-alive之后，就会多一个生命周期activated
  // 第一次渲染的时候，activated在mounted之后调用
  // 然后再回到该页面的时候，mounted不会再调用了，而activated会调用
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      getHomeData({ city: this.city }).then(res => {
        this.setHomeData(res)
      })
    }
  }
}
</script>

<style scoped lang='less'>

</style>
