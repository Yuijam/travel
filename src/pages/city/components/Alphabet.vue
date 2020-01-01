<template>
  <ul class="list">
    <li
      class="item"
      v-for="l in letters"
      :key="l"
      :ref="l"
      @click="handleClickLetter"
      @touchstart.prevent='handleTouchStart'
      @touchmove='handleTouchMove'
      @touchend='handleTouchEnd'
    >
      {{l}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0
    }
  },
  // 第一次渲染是拿的空对象，当拿到数据再更新完毕的时候计算一次startY
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClickLetter (event) {
      this.$emit('change', event.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 用timer做一个函数节流，避免过多的调用，测试了下，这样确实能减少很多次调用
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20) // 字母高度为20
          console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
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
