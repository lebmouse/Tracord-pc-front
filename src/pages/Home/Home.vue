<template>
<div class="home">
  <nav-year class="nav-year"></nav-year>
  <nav-month class="nav-month"></nav-month>
</div>
</template>

<script>
import navYear from './components/navYear'
import navMonth from './components/navMonth'
export default {
  name: 'home',
  components: {
    navYear,
    navMonth
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
