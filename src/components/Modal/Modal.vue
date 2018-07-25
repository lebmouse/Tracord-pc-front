<template>
<transition>
  <div class="Modal">
    <div class="container">
      <div class="Modal_Head">
        <div class="Modal_Head_closebtn"></div>
      </div>
      <div class="Modal_Body">
        <slot name="body">
          body
        </slot>
        <form>
          <input type="text" placeholder="아이디를 입력해주세요">
          <input type="text" placeholder="패스워드를 입력해주세요">
          <input type="text" placeholder="다시 패스워드를 입력해주세요">
        </form>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>

</style>

