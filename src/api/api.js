import axios from 'axios'
export const getHomeData = params => {
  return axios.get(`/homeData`, { params })
}

export const getCityData = params => {
  return axios.get(`/cityData`, { params })
}

export const getDetailData = params => {
  return axios.get(`/detailData`, { params })
}
