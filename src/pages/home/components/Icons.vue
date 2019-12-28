<template>
  <div class="container">
    <swiper>
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
  data () {
    return {
      iconList: [
        { id: '0001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '景点门票' },
        { id: '0002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png', desc: '故宫' },
        { id: '0003', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png', desc: '陶然亭冰雪' },
        { id: '0004', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png', desc: '静之湖滑雪' },
        { id: '0005', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', desc: '一日游' },
        { id: '0006', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png', desc: '古北水镇' },
        { id: '0007', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png', desc: '北京滑雪' },
        { id: '0008', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png', desc: '颐和园' },
        { id: '0009', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png', desc: '泡温泉' },
        { id: '0010', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', desc: '北京必游' }
      ]
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
