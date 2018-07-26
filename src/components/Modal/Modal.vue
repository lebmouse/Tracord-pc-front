<template>
<transition name="modal">
  <div class="Modal" v-if="isPopUp">
    <div class="container">
      <div class="Modal_Head">
        <div class="Modal_Head_closebtn">
          <i class="fas fa-times" @click="close"></i>
        </div>
      </div>
      <div class="Modal_Body">
        <slot name="body">
          body
        </slot>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  props: {
    isPopUp: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }

}
</script>
<style lang='scss' scoped>
.Modal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(92, 89, 89, 0.486);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    position: relative;
    background-color: black;
    padding-top: 30px;
  }
  &_Head {
    position: absolute;
    top: 5px;
    right: 10px;
    color: white;
    font-size: 20px;
  }
}

.modal-enter-active,
{
  animation: popUp 0.2s;
}

@keyframes popUp {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>

