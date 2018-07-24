<template>
<nav class="Navigation">
  <div class="NavigationContent">
    <div class="container" ref="NavigationContent" @click="draw">
      <slot name="contents"></slot>
    </div>
  </div>
  <div class="NavigationCover" @click="draw">
    <div class="container" ref="NavigationCover">
      <slot class="Head" name="head">Head</slot>
      <slot class="SubHead" name="subHead">subHead</slot>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    order: {
      type: Number,
      required: false,
      default: 1
    }
  },
  data() {
    return {
      isDraw: false
    }
  },
  computed:{
    marginLeft(){
      console.log(this.order*100 + 0.5)
      return this.order*100 + 1
    }
  },
  methods: {
    draw() {
      if (this.isDraw) {
        this.$refs.NavigationContent.style.transform = `translateX(calc(${this.marginLeft}px - 100%))`
      } else {
        this.$refs.NavigationContent.style.transform = `translateX(0)`
      }
      this.isDraw = !this.isDraw
    }
  },
  mounted() {
    this.$refs.NavigationContent.style.transform = `translateX(calc(${this.marginLeft}px - 100%))`
  }

}
</script>
<style lang='scss' scoped>
.Navigation {
  user-select: none;
  position: relative;
  &Content {
    position: absolute;
    // position: relative;
    >.container {
      position: fixed;
      left: 0;
      bottom: 0;
      box-sizing: border-box;
      width:95%;
      min-width: 1400px;
      height: 95%;
      // transform: translateX(calc(101px - 100%));
      transform-origin: 0;
      overflow-x: hidden;
      background-color: black;
      border: 1px solid white;
      transition: 0.5s;
      &._drawActive {
        // transform: translateX(0);
      }
    }
  }
  &Cover {
    position: absolute;
    // position: relative;
    >.container {
      position: fixed;
      bottom: 0;
      box-sizing: border-box;
      width: 100px;
      height: 95%;
      background-color: black;
      color: white;
      text-align: center;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-right: 0px solid;
      border-left: 0px;
      &._drawActive {
        border-right: 0px solid;
      }
    }
  }
}
</style>
