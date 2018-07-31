<template>
<div class="YearBoard">
  <div class="Contents">
    <div class="container">
      <div class="dayBox box" v-for="i in 366" :key="i">
        {{i}}
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'YearBoard',
  props: {
    recordYear: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateObject() {
      return new Date(this.recordYear.year);
    }
  }
}
</script>
<style lang='scss' scoped>
.YearBoard {
  color: white;
  height: 100%;
  background-color: gray;
  overflow-y: scroll;
}

.Contents {
  >.container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(52,1fr);
    height: 100%;
    .box {
      font-size:10px;
      width: 32px;
      height: 31px;
    }
    .dayBox {
      border: 1px solid white;
      border-radius: 100%;
    }
  }
}
</style>
