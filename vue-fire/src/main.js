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
  apiKey: 'AIzaSyBeNP-aZqoW_R30rfv3tLVHmk7kA8BzkuI',
  authDomain: 'wtf-firebase-bb67b.firebaseapp.com',
  databaseURL: 'https://wtf-firebase-bb67b.firebaseio.com',
  projectId: 'wtf-firebase-bb67b',
  storageBucket: 'wtf-firebase-bb67b.appspot.com',
  messagingSenderId: '602858613270'
}
firebase.initializeApp(config)
Vue.prototype.$db = firebase.database()

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
