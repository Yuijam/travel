import axios from 'axios'
export const getHomeData = params => {
  return axios.get(`/homeData`, {
    params: params
  })
}
