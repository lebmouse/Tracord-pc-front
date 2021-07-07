// import firebase from 'firebase'
import router from '../router/index.js'

export default {
  setCurrentuser(state,payload) {
    state.user = payload
  },
  signIn(state, payload) {
    state.user = payload
    router.replace('/home')
    // if(payload){
    // }
  },
  signOut(state) {
    state.user = null
  }
}