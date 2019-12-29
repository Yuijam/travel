import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// import Mock from 'mockjs'
import {
  homeData
} from './data'
export default {
  /**
   * mock start
   */
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
  }
}
