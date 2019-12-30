<template>
  <div>
    <div class="container">
      <input
        class="search-input"
        v-model="keyword"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in result"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到相关城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      result: []
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCityClick (city) {
      // 直接用commit调用mutations
      this.changeCity(city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.result.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.result = []
        return
      }
      let result = []
      this.timer = setTimeout(() => {
        for (let c in this.cities) {
          this.cities[c].forEach(v => {
            if (v.spell.indexOf(this.keyword) !== -1 || v.name.indexOf(this.keyword) !== -1) {
              result.push(v)
            }
          })
        }
      }, 100)
      this.result = result
    }
  }
}
</script>

<style scoped lang="less">
  @import '~styles/variable.less';

  .container {
    height: .72rem;
    padding: 0 .1rem;
    background: @bgColor;
    .search-input {
      box-sizing: border-box;
      width: 100%;
      padding: 0 .1rem;
      height: .62rem;
      line-height: .62rem;
      text-align: center;
      border-radius: .06rem;
      color: #666;
    }
  }
  .search-content {
    background: #eee;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    top: 1.58rem;
    right: 0;
    left: 0;
    bottom: 0;
    .search-item {
      line-height: .62rem;
      padding-left: .2rem;
      color: #666;
      background: #fff;
    }
  }
</style>
