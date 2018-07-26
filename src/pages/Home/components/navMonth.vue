<template>
<navigation class="NavMonth" :order="2">
  <h1 slot="head">Apr</h1>
  <h2 slot="subHead">Month</h2>
  <div class="Contents" slot="contents">
    <div class="Contents_wrap">
      <div class="Contents_Head" v-for="(d,index) in days" :key="d+index">
        {{d}}
      </div>
      <!-- <div class="Contents_Dummy" v-for="non in startDay-1" :key="non+`non`">
      </div>
      <div class="Contents_Items" v-for="i in monthLength" :key="i" @click="dateFocusing(i)">
        <div class="day">
          <div class="dayText">
            {{i}}
          </div>
          <img v-if="monthRecord[i]" :src="monthRecord[i]">
        </div>
      </div> -->
      <div class="Contents_Body" v-for="i in 35" :key="i">
        <img class="Contents_Img" src="http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/712/431/80712431_1444296653680_1_600x600.JPG" alt="">
      </div>
    </div>
  </div>
</navigation>
</template>
<script>

export default {
  data() {
    return {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']
    }
  },
  computed: {
  },
}
</script>
<style lang='scss' scoped>
.NavMonth {
  color: black;
}

.Contents {
  width: 876px;
  height: 100%;
  min-height: 600px;
  // background-color: gray;
  margin-left: auto;
  margin-right: 120px;
  &_wrap {
    padding-top: 2.5%;
    margin-left: auto;
    margin-right: 0;
    // background-color: mediumspringgreen;
    display: grid;
    grid-template-columns: repeat(7, 120px);
    grid-template-rows: 35px repeat(5, 120px);
    grid-gap: 2px;
  }
  &_Head {
    text-align: center;
    font-size: 20px;
    color: white;
  }
  &_Body {
    color: white;
    border-radius: 100%;
    border: 0.1px solid white;
    overflow: hidden;
  }
  &_Img {
    width: 100%;
    height: 100%;
  }
}
</style>
