<template>
  <div class="container">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="less">
  // 如果要用这个@符号引入其他css，前面得加一个~才行
  @import '~styles/variable.less';
  .container {
    display: flex;
    line-height: 0.86rem;
    // background: #00bcd4;
    background: @bgColor;
    color: #fff;
    .header-left {
      width: 0.64rem;
      float: left;
      text-align: center;
      .back-icon {
        font-size: .4rem;
      }
    }
    .header-input {
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      padding-left: .2rem;
      background: #fff;
      border-radius: .1rem;
      color: #ccc;
    }
    .header-right {
      min-width: 1.04rem;
      padding: 0 .1rem;
      float: right;
      text-align: center;
      color: #fff;
      .arrow-icon {
        font-size: .24rem;
      }
    }
  }
</style>
