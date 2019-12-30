import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
  // 还有一个getter，有点类似computed，就是根据state再组装一下数据
})
