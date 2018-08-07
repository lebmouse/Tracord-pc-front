<template>
<div id="app">
  <router-view/>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'App',
  beforeCreate() {
    console.log('app-mounted')
    this.$store.commit('setCurrentuser')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  /* height:100%; */
  /* padding:0; */
  box-sizing: border-box;
  background-color: black;
}
</style>
