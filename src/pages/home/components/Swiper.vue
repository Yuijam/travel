<template>
  <div class="container">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true // 循环轮播
      },
      swiperList: [
        { id: '0001', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/1d8faa9f4d49b77ca1e61e2b478260f7.jpg_750x200_25cf76e2.jpg' },
        { id: '0002', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/37c4edf7c033ada7b61a1f9d0acffd08.jpg_750x200_3223c943.jpg' },
        { id: '0003', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/d6df0db510d7b9aaa3d9ce4cffafeca1.jpg_750x200_abb38f14.jpg' }
      ]
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
  // 因为设置了scoped所以需要deep才能控制其他组件的样式
  .container /deep/ .swiper-pagination-bullet-active {
      background: #fff;
    }
  .container {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.6%;
  }
  .swiper-img {
    width: 100%;
  }
</style>
