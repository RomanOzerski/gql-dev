import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0
    },

    mutations: {
        increase(state, count) {
            state.count = count++
        },
        decrease(state, count) {
            state.count = count--
        }
    },

    getters: {
        count: state => state.count
    }
})