<template>
<modal class="SignUp" :isPopUp="isPopUp" @close="close">
  <form class="SignUp_Form" slot="body">
    <div class="container">
      <div class="layout">
        <div class="label">아이디</div><input class="input" type="text" placeholder="이메일을 입력해주세요" v-model="id">
      </div>
      <div class="layout">
        <div class="label">비밀번호</div><input class="input" type="password" placeholder="패스워드를 입력해주세요" v-model="pw">
      </div>
      <div class="layout">
        <div class="label">재입력</div><input class="input" type="password" placeholder="다시 패스워드를 입력해주세요" v-model="rePw">
      </div>
      <div class="layout">
        <button @click="submit">확인</button>
      </div>
    </div>
  </form>
</modal>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
  props: ['isPopUp'],
  data() {
    return {
      id: null,
      pw: null,
      rePw: null
    }
  },
  computed: {
    isEqualPw() {
      return this.pw === this.rePw
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    submit() {
      if (this.isEqualPw) {
        firebase.auth().createUserWithEmailAndPassword(this.id, this.pw)
          .then(function(user) {
              alert('Your acconut has been created !')
            },
            function(err) {
              alert('Oops' + err.message)
            })
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.SignUp {
  &_Form {
    // background-color: firebrick;
    color: white;
    width: 600px;
    height: 400px;
    >.container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      // background-color: forestgreen;
      >.layout {
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        margin: 5px auto;
        >.label {
          flex-basis: 15%;
          margin-right: 5%;
          background-color: rgb(54, 53, 53);
        }
        >.input {
          flex-basis: 50%;
        }
      }
    }
  }
}
</style>
