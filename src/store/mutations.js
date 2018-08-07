import * as types from './types.js'
import firebase from 'firebase'
import router from '../router/index.js'

export default {
  [types.UID](state, uid) {
    state.uid = uid
  },
  [types.ERROR_STATE](state, errorState) {
    state.errorState = errorState
  },
  [types.IS_AUTH](state, isAuth) {
    state.isAuth = isAuth
  },
  setCurrentuser(state) {
    firebase.auth().onAuthStateChanged((res)=> {
      if (res) {
        console.log(res)
        state.currentUser = res
      } else {
        console.log('no user setCurrentUser')
        state.currentUser = null
      }
    });
    
  },
  signIn(state, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
      (res) => {
        state.user = res
        router.replace('/home')
      },
      (err) => {
        alert('error : ' + err)
      }
    )

  }
}