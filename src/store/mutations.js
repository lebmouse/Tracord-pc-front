import * as types from './types.js'

export default {
  [types.UID](state,uid){
    state.uid = uid
  },
  [types.ERROR_STATE](state,errorState){
    state.errorState = errorState
  },
  [types.IS_AUTH](state,isAuth){
    state.isAuth = isAuth
  }
}