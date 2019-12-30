<template>
  <ul class="list">
    <li class="item" v-for="(city, key) in cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
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
  @import '~styles/variable.less';

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .item {
      color: @bgColor;
      line-height: .4rem;
      text-align: center;
    }
  }
</style>
