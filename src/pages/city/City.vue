<template>
  <div class="container">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities='hotCities' :cities='cities'></city-list>
    <city-alphabet :cities='cities'></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import { getCityData } from '@/api/api'

export default {
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted () {
    getCityData().then(res => {
      let data = res.data.cityData
      this.cities = data.cities
      this.hotCities = data.hotCities
    })
  }
}
</script>

<style scoped lang="less">
</style>
