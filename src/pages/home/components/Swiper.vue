<template>
  <div class="container">
    <!-- 这里如果不写这个v-if，那么每次都是先展示最后一条数据，原因是一开始是空数组
    所以这里让他数据加载完成才渲染，但是为什么空数组会导致这样就没查到了 -->
    <swiper :options="swiperOption" v-if="showSwiper">
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
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true // 循环轮播
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
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
