import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

let app = ''
var firebaseConfig = {
  apiKey: 'AIzaSyBDe1xpwRi55JtuzH1-844Kbfi2aiPlkg8',
  authDomain: 'my-keep-f2364.firebaseapp.com',
  databaseURL: 'https://my-keep-f2364.firebaseio.com',
  projectId: 'my-keep-f2364',
  storageBucket: 'my-keep-f2364.appspot.com',
  messagingSenderId: '631632740465',
  appId: '1:631632740465:web:10916d1ea43f118c675bd0'
}
firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
