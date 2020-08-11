// Pull & Config NPM installed Packages
import Vue from 'vue'
import 'es6-promise/auto'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './components/App'

// Automatic Global Component Regsitration
import './components/_globals'

// Package initialisation
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueApollo)
require('./bootstrap');
window.Vue = require('vue');

// Vue-Router
import { routes } from './router/routes';
const router = new VueRouter({
  mode: 'history',
  routes
});

// Vuex - rootStore is global plugin for "store.js".
// It allows "store.js" attributes to be accesed globally.

import { store } from './store/store'
import rootStore from './rootStore'
Vue.use(rootStore)

// Apollo Setup
const apolloClient = new ApolloClient({ uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone'})
const apolloProvider = new VueApollo({defaultClient: apolloClient})

// Initialisation of Vue, Vue-Router, Vuex, Vue-Apollo
const app = new Vue({
    store,  
    el: '#app',
    router,
    apolloProvider,
    components: {App}
});