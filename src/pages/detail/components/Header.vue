<template>
  <div>
    <router-link
      tag="div"
      class="header-abs"
      to="/"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link class="iconfont header-fixed-back-icon" to="/">&#xe624;</router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    // 这个绑定是对全局的绑定，不是对单独某个组件的绑定
    // 因此即使切换到别的组件了，依然在监听着这个事件，造成内存泄漏
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  @import '~styles/variable';
  .header-abs {
    // position: relative;
    position: absolute;
    top: .2rem;
    left: .2rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    background: rgba(0, 0, 0, .8);
    border-radius: .4rem;
    text-align: center;
    .header-abs-back {
      color: #fff;
      font-size: .4rem;
    }
  }
  .header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    width: 100%;
    height: @headerHeight;
    line-height: @headerHeight;
    text-align: center;
    background: @bgColor;
    font-size: .32rem;
    color: #fff;
    .header-fixed-back-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
</style>
