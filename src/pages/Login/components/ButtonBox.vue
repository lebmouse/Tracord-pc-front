<template>
<div class="ButtonBox">
  <button class="ButtonBox_Items" v-for="(buttonItem,index) in buttonGroup" :key="index">
    <i :class="buttonItem.logo" class="ButtonBox_logo"></i>
    <div class="ButtonBox_text">Login with {{buttonItem.name}}</div>  
      </button>
</div>
</template>
<script>
export default {
  data() {
    return {
      buttonGroup: [{
        logo: ['fab', 'fa-facebook-f'],
        name: 'Facebook'
      }, {
        logo: ['fab', 'fa-twitter'],
        name: 'Twitter'
      }, {
        logo: ['fab', 'fa-google-plus-g'],
        name: 'Google +'
      }, {
        logo: ['fab', 'fa-soundcloud'],
        name: 'Soundcloud'
      }, ]
    }
  }

}
</script>
<style lang='scss' scoped>
@mixin hoverPaint($color) {
  background-color: $color;
  &:hover {
    background-color: lighten($color, 5%);
    outline-color: darken($color, 5%);
  }
  &:focus {
    background-color: lighten($color, 5%);
    outline-color: darken(white, 30%);
  }
}

.ButtonBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &_Items {
    margin:5px auto;
    width: 250px;
    height: 37px;
    display: flex;
    transition: 300ms;
    border: none;
    color: white;
    font-size: 15px;
    &:nth-child(1) {
      @include hoverPaint(#3b5998);
    }
    &:nth-child(2) {
      @include hoverPaint(#1dcaff);
    }
    &:nth-child(3) {
      @include hoverPaint(#dd4b39);
    }
    &:nth-child(4) {
      @include hoverPaint(#ff8800);
    }
  }
  &_logo {
    margin-left: 18px;
  }
  &_text {
    margin: auto;
  }
}
</style>
