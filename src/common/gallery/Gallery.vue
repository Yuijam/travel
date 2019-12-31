<template>
  <div class="gallery-container" @click="handleClose">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="swiper-img" :src="item"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 监听到当前元素或者父级元素dom发生变化时，就会刷新一次，解决swiper计算宽度的问题
        observeParents: true,
        observer: true
        // loop: true // 循环轮播
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .gallery-container /deep/ .swiper-container {
    // .swiper-pagination 设置bottom超过范围后被隐藏
    // 查看dom发现wrapper下面有个.swiper-container中有overflow：hidden
    // 让他继承父类的overflow。
    // 发现这里直接设置visible也是可以的
    // overflow: visible;
    overflow: inherit;
  }
  .gallery-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    .wrapper {
      // overflow: hidden;
      height: 0;
      width: 100%;
      padding-bottom: 100%;
      .swiper-img {
        width: 100%;
      }
      .swiper-pagination {
        color: #fff;
        bottom: -1rem;
      }
    }
  }
</style>
