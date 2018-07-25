// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'



Vue.config.productionTip = false


var config = {
  apiKey: "AIzaSyAgjby0j8uBlnoXljiB9SHCep7_ZMpKMqo",
  authDomain: "tracord-firbase.firebaseapp.com",
  databaseURL: "https://tracord-firbase.firebaseio.com",
  projectId: "tracord-firbase",
  storageBucket: "tracord-firbase.appspot.com",
  messagingSenderId: "94357205"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})