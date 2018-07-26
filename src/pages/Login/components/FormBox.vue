<template>
<div class="FormBox">
  <form class="FormBox_Form">
    <input class="FormBox_inputText" type="text" name="id" id="id" autocomplete="off" v-model="email" placeholder="email">
    <input class="FormBox_inputText" type="password" name="pw" id="pw" autocomplete="off" v-model="password" placeholder="password">
    <input class="FormBox_login" type="button" value="Login" @click="signIn">
    <div class="FormBox_signUp" @click="isSignUp = !isSignUp">sign up</div>
  </form>
  <sign-up :isPopUp="isSignUp" @close="close"></sign-up>
</div>
</template>
<script>
import firebase from 'firebase'
import {
  mapMutations,
  mapActions
} from 'vuex'

import SignUp from './SignUp.vue'
export default {
  name: 'FormBox',
  data() {
    return {
      isSignUp: false,
      email: null,
      password: null
    }
  },
  components: {
    SignUp
  },
  methods: {
    ...mapMutations([]),
    ...mapActions(['login']),
    open() {
      this.isSignUp = true;
    },
    close() {
      this.isSignUp = false
    },
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        res=> {
          console.log(res.user);
          this.$router.replace('/home')
        },
        err=> {
          alert('error : ' + err)
        }
      )
    }
  },
  mounted(){
    
  }
}
</script>
<style lang='scss' scoped>
@mixin itemsSize {
  width: 240px;
  height: 37px;
}

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

.FormBox {
  display: flex;
  justify-content: center;
  align-items: center;
  &_Form {
    display: flex;
    flex-direction: column;
    // background-color: #fff;
  }
  &_inputText {
    @include itemsSize;
    margin: 5px auto;
    color: white;
    background-color: black;
    border: 1px solid white;
    font-size: 15px;
    &::before {
      content: '   ';
    }
  }
  &_login {
    margin: 5px auto;
    @include itemsSize;
    display: flex;
    justify-content: center;
    transition: 300ms;
    border: none;
    color: black;
    font-size: 16px;
    @include hoverPaint(#eeeded);
  }
  &_signUp {
    margin: 5px;
    color: white;
    margin-left: auto;
  }
}
</style>
