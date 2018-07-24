<template>
<navigation class="NavMonth" :order="2">
  <h1 slot="head">Apr</h1>
  <h2 slot="subHead">Month</h2>
  <div class="contents" slot="contents">

  </div>
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
.NavMonth{
  color:black;
}
.contents{
  width:100%;
  height:100%;

}
</style>
