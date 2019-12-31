<template>
  <div class="container">
    <div class="title">热销推荐</div>
    <ul>
      <!-- li 加一个border-bottom就能显示一个1像素的边框 -->
      <router-link
        tag="li"
        :to="`/detail/${item.id}`"
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <img class="item-img" :src=item.imgUrl alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    recommendList: Array
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
