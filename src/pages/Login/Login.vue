<template>
<div class="Login">
  <div class="container">
    <div class="Login_LogoBox">
    </div>
    <form-box class="Login_FormBox">
    </form-box>
    <button-box class="Login_ButtonBox">
    </button-box>
  </div>
</div>
</template>
<script>
import ButtonBox from './components/ButtonBox.vue'
import FormBox from './components/FormBox.vue'

export default {
  name: 'Login',
  components: {
    ButtonBox,
    FormBox
  }

}
</script>
<style lang='scss' scoped>
.Login {
  background-color: black;
  justify-content: center;
  height: 100%;
  width: 100%;
  .container {
    margin: auto;
    margin-top: 150px;
    width: 900px;
    height: 300px;
    border: 1px solid white;
    display: flex;
  }
  &_LogoBox {
    height: 100%;
    width: 30%;
    border: 1px solid white;
  }
  &_FormBox {
    height: 100%;
    width: 100%;
    border: 1px solid white;
  }
  &_ButtonBox {
    height: 100%;
    width: 100%;
    border: 1px solid white;
  }
}
</style>
