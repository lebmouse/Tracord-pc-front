import * as types from './types.js'
import firebase from 'firebase'


export default {
  syncSetCurrentUser({
    commit
  }) {
    firebase.auth().onAuthStateChanged((res) => {
      if (res) {
        console.log('user setCurrentUser')
        console.log(res)
        commit('setCurrentuser',res)
      } else {
        console.log('no user setCurrentUser')
        commit('setCurrentuser',null)
      }
    });
  },
  syncSignIn({commit},payload){
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
      (res) => {
        console.log('signIn')
        console.log(res.user);
        console.log(state)
        commit('signIn',res.user)
      },
      (err) => {
        alert('error : ' + err)
      }
    )
  },
  syncSignOut({
    commit
  }){
    firebase.auth().signOut().then(() => {
      alert('로그아웃 되었습니다.');
      commit('signOut')
    })
  }
}