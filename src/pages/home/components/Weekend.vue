<template>
  <div class="container">
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- li 加一个border-bottom就能显示一个1像素的边框 -->
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src=item.imgUrl alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recommendList: [
        { id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '故宫', desc: '世界五大宫之首，穿越与您近在咫尺' },
        { id: '0002', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '故宫', desc: '世界五大宫之首，穿越与您近在咫尺' },
        { id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '故宫', desc: '世界五大宫之首，穿越与您近在咫尺' },
        { id: '0004', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '故宫', desc: '世界五大宫之首，穿越与您近在咫尺' }
      ]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  @import '~styles/mixins.less';

  .title {
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    margin-top: .2rem;
  }
  .item {
    .item-img-wrapper {
      height: 0;
      padding-bottom: 33.4%;
      overflow: hidden;
    }
    .item-img {
      width: 100%;
      // padding: .1rem;
    }
    .item-info {
      padding: .1rem;
      // 因为不是display: flex， 所以不用min-width 下面加的ellipsis也会起作用
      // min-width: 0;
      .item-title {
        line-height: .54rem;
        font-size: .32rem;
        .ellipsis();
      }
      .item-desc {
        color: #ccc;
        line-height: .4rem;
        .ellipsis();
      }
    }
  }
</style>
