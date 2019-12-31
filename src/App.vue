<template>
  <div id="app">
    <!-- 因为每次路由切换组件都会重新渲染，mounted就会重新走一次，重新获取一次数据
    用keep-alive包裹就避免这种情况，直接从内存中拿出来，避免重复渲染 -->
    <!-- 设置Detail组件不做缓存 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
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
