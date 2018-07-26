import * as types from './types.js'


export default {
  login(store, {
    uid,
    password
  }) {
    /* 로그인은 백엔드를 다녀와야 하냐 비동기 처리를 한다 */
  },
  setPersistence() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
}