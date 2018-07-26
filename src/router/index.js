import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Login from '../pages/Login/Login.vue'
import firebase from 'firebase'

Vue.use(Router)

var router = new Router({
  routes: [{
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log('home-beforeEnter')
        let signInState = firebase.auth().onAuthStateChanged(user => user)
        if (!signInState) {
          next('/login');
        } else {
          next();
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        console.log('login-beforeEnter')
        let signInState = firebase.auth().currentUser
        console.log(signInState)
        if (signInState) {
          next('/home');
        } else {
          next();
        }
      }
    }
  ]
});


export default router;