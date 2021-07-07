import Vue from 'vue'
import store from '../store/store.js'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Login from '../pages/Login/Login.vue'
import firebase from 'firebase/app'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged((res) => {
          if (res) {
            next('/home')
          } else {
            next();
          }
        });
      }
    },
    {
      path: '/login',
      redirect: '/'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged((res) => {
          if (res) {
            next();
          } else {
            next('/login')
          }
        });
      }
    },
  ]
});



export default router;