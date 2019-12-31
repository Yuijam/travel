import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// import Mock from 'mockjs'
import { homeData, cityData, detailData } from './data'
export default {
  start () {
    let mock = new MockAdapter(axios) // 创建 MockAdapter 实例
    mock.onGet('/homeData').reply(config => { //  config 指 前台传过来的值
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            homeData
          }])
        }, 200)
      })
    })
    mock.onGet('/cityData').reply(config => { //  config 指 前台传过来的值
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            cityData
          }])
        }, 200)
      })
    })
    mock.onGet('/detailData').reply(config => { //  config 指 前台传过来的值
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            detailData
          }])
        }, 200)
      })
    })
  }
}
