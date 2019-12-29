<template>
  <div class="container">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  @import '~styles/variable.less';

  .container {
    overflow: hidden;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    color: #fff;
    background: @bgColor;
    font-size: .32rem;
    position: relative;
    .back-icon {
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
