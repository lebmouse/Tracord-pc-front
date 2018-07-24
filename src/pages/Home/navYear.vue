<template>
<navigation :order="1">
  <h1 slot="head">2018</h1>
  <h2 slot="subHead">year</h2>
</navigation>
</template>
<script>
import Navigation from '../../components/Navigation/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>
<style lang='scss' scoped>
</style>
