<template>
  <div class="container">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  data () {
    return {

    }
  },
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style scoped lang="less">

</style>
