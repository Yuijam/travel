<template>
  <div class="container">
    <detail-banner
      :sightName='sightName'
      :bannerImg='bannerImg'
      :galleryImgs='galleryImgs'
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list='categoryList'></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import { getDetailData } from '@/api/api'

export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      categoryList: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    getDetailData().then(res => {
      console.log(res)
      const data = res.data.detailData
      this.sightName = data.sightName
      this.bannerImg = data.bannerImg
      this.galleryImgs = data.galleryImgs
      this.categoryList = data.categoryList
    })
  }
}
</script>

<style scoped lang="less">

</style>
