import * as types from './types.js'
import firebase from 'firebase'


export default {
  syncSetCurrentUser({
    commit
  }){
    commit('setCurrentuser')
  },
}