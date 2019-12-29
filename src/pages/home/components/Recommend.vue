<template>
  <div class="container">
    <div class="title">热销推荐</div>
    <ul>
      <!-- li 加一个border-bottom就能显示一个1像素的边框 -->
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src=item.imgUrl alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
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
        { id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg', title: '故宫', desc: '世界五大宫之首，穿越与您近在咫尺' },
        { id: '0002', imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg', title: '故宫', desc: '世界五大宫之首，穿越与您近在咫尺' },
        { id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg', title: '故宫', desc: '世界五大宫之首，穿越与您近在咫尺' },
        { id: '0004', imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg', title: '故宫', desc: '世界五大宫之首，穿越与您近在咫尺' }
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
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    // background: red;
    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info {
      flex: 1;
      padding: .1rem;
      // 如果不设置min-width 下面加的ellipsis不会起作用
      min-width: 0;
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
      .item-button {
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        margin-top: .16rem;
        color: #fff;
        line-height: .44rem;
      }
    }
  }
</style>
