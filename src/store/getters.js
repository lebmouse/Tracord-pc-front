export default {
  getUid: state => state.uid,
  getErrorState: state => state.errorState,
  getIsAuth: state => state.isAuth,
  getCurrentUser : state => state.currentUser,
  getUser : state => state.user
}