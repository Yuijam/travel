<template>
  <div class="container">
    <swiper :options="swiperOption">
      <!-- 这里直接用index作为key也还好，因为并不会去变更这一块的内容 -->
      <swiper-slide v-for="(page, index) of pages" :key='index'>
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src=icon.imgUrl
            />
          </div>
          <p class="icon-desc" v-text="icon.desc"></p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autopaly: false
      }
    }
  },
  components: {},
  computed: {
    pages () {
      let pages = []
      this.iconList.forEach((icon, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(icon)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="less">
@import "~styles/variable.less";
@import '~styles/mixins.less';

// 撑开swiper-container
.container /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.container {
  // background: red;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  margin-top: .1rem;
  .icon {
    float: left;
    position: relative;
    // height: 0;
    width: 25%;
    padding-bottom: 25%;
    // background: green;
    overflow: hidden;
    .icon-img {
      position: absolute;
      top: 0;
      bottom: 0.44rem;
      left: 0;
      right: 0;
      // background: yellow;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: @darkTextColor;
      .ellipsis();
    }
  }
}
</style>
