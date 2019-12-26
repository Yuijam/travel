<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    console.log('hello app')
  }
}
</script>

<style scoped lang='less'>

</style>
