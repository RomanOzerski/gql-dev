import store from './store/store'
export default {
  store,
  install (Vue, options) {
    Vue.prototype.$rootStore = store
  }
}