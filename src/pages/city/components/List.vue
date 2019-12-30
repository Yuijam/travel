<template>
  <div class="container" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="c in hotCities" :key="c.id">
            <div class="button">{{c.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(value, key) in cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="c in value" :key="c.id">{{c.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  props: {
    cities: Object,
    hotCities: Array
  },
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang="less">
  @import '~styles/variable.less';
  .border-topbottom {
    // 设置border的颜色
    &:before {
      border-color: #ccc;
    }
    &:after {
      border-color: #ccc;
    }
  }
  .border-bottom {
    // 设置border的颜色
    &:before {
      border-color: #ccc;
    }
  }
  .container {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title {
      line-height: .44rem;
      padding-left: .2rem;
      background: #eee;
      color: #666;
      font-size: .26rem;
    }
    .button-list {
      padding: .1rem .6rem .1rem .1rem;
      // 触发bfc 不然下面float后就看不到
      overflow: hidden;
      .button-wrapper {
        width: 33.33%;
        float: left;
        .button {
          text-align: center;
          margin: .1rem;
          border: .02rem solid #ccc;
          padding: .1rem 0;
        }
      }
    }
    .item-list {
      .item {
        line-height: .76rem;
        padding-left: .2rem;
      }
    }
  }
</style>
