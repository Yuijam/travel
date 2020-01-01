<template>
  <div>
    <div class="container" @click="handleClickImg">
      <img class='banner-img' :src='bannerImg'/>
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe638;</span>
          39
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :imgs='galleryImgs' v-show="showGallery" @close='handleClose'></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  props: {
    bannerImg: String,
    galleryImgs: Array,
    sightName: String
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleClickImg () {
      this.showGallery = true
    },
    handleClose () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  }
}
</script>

<style scoped lang="less">
  .container {
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    position: relative;
    .banner-img {
      width: 100%;
    }
    .banner-info {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      color: #fff;
      line-height: .6rem;
      // 渐变色背景，从top开始
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
      .banner-title {
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      }
      .banner-number {
        height: .32rem;
        line-height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, .8);
        font-size: .24rem;
        .banner-icon {
          font-size: .24rem;
        }
      }
    }
  }
</style>
