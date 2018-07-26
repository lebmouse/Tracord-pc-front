<template>
<div class="home">
  <nav-year class="nav-year"></nav-year>
  <nav-month class="nav-month"></nav-month>
  <button @click="logout">Logout</button>
</div>
</template>

<script>
import navYear from './components/navYear'
import navMonth from './components/navMonth'
import firebase from 'firebase'
export default {
  name: 'home',
  components: {
    navYear,
    navMonth
  },
  methods: {
    logout() {
      console.log('asdf');
      firebase.auth().signOut().then(() => {
        alert('로그아웃 되었습니다.');
        this.$router.replace('/login')
      })
    }
  },
  mounted(){
    let user = firebase.auth().currentUser;
    console.log('user')
    console.log(user);
  }
}
</script>
<style lang='scss' scoped>
.home {
  position: relative;
}

.nav-year {
  z-index: 1;
  position: fixed;
}

.nav-month {
  z-index: 0;
  left: 100px;
  position: absolute;
}
</style>
