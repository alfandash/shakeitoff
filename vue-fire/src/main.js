// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuefire from 'vuefire'
import firebase from 'firebase'

Vue.use(vuefire)
Vue.config.productionTip = false

/* eslint-disable no-new */
var config = {
  apiKey: 'AIzaSyAxUBOzwtvjNwc2olbIVn8mS-UyEqmneFg',
  authDomain: 'zoomato-1503630845538.firebaseapp.com',
  databaseURL: 'https://zoomato-1503630845538.firebaseio.com',
  projectId: 'zoomato-1503630845538',
  storageBucket: 'zoomato-1503630845538.appspot.com',
  messagingSenderId: '540248649886'
}

firebase.initializeApp(config)
Vue.prototype.$db = firebase.database()

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
