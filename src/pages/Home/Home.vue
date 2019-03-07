<template>
<div class="home">
  <record-content class="record-content"></record-content>
  <nav-month class="nav-month"></nav-month>
  <nav-year class="nav-year"></nav-year>
</div>
</template>

<script>
import navYear from './components/navYear'
import navMonth from './components/navMonth'
import RecordContent from './components/Record/RecordContent'
import firebase from 'firebase'
export default {
  name: 'home',
  components: {
    navYear,
    navMonth,
    RecordContent
  },
  
  beforeUpdate() {
    // let user = firebase.auth().currentUser.uid
    // console.log(user);
  }
}
</script>
<style lang='scss' scoped>
.home {
  position: relative;
  height: 100%;
  width: 100%;
  // background-color: #fff;
}

.nav-year {
  z-index: 2;
  position: absolute;
}

.nav-month {
  z-index: 2;
  left: 100px;
  position: absolute;
}

.record-content {
  position: relative;
  min-width:1200px;
  width: 87%;
  margin-top: 2.3%;
  // background-color: blue;
  margin-left: auto;
  margin-right: 0;
  overflow-x: hidden;
  height: 100%;
}
</style>
