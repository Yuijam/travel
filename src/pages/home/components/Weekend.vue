<template>
  <div class="container">
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- li 加一个border-bottom就能显示一个1像素的边框 -->
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
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
  props: {
    weekendList: Array
  },
  data () {
    return {

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
  }
  .item {
    .item-img-wrapper {
      height: 0;
      // padding-bottom: 33.4375%;
      padding-bottom: 37.09%;
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
