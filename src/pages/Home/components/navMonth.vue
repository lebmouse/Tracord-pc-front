<template>
<navigation class="NavMonth" :order="2">
  <h1 slot="head">Apr</h1>
  <h2 slot="subHead">Month</h2>
  <div class="Contents" slot="contents">
    <div class="Contents_wrap">
      <div class="Contents_Head" v-for="(d,index) in days" :key="d+index">
        {{d}}
      </div>
      <div class="Contents_Dummy_before dayBox" v-for="day in beforeDays" :key="'before'+day">
      </div>
      <div class="Contents_Body dayBox" v-for="m in monthLength" :key="m">
        <img class="Img" src="http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/712/431/80712431_1444296653680_1_600x600.JPG" alt="">
        <div class="Text">
          {{m}}
        </div>
      </div>
      <div class="Contents_Dummy_after dayBox" v-for="day in afterDays" :key="'after'+day">
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
    presentDateObject() {
      let date = new Date()
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay()
      };
    },
    beforeDays() {
      return new Date(this.presentDateObject.year, this.presentDateObject.month, 1).getDay();
    },
    afterDays() {
      console.log(35 - this.monthLength+this.beforeDays)
      return 35 - this.monthLength+this.beforeDays
    },
    monthLength() {
      return 32 - new Date(this.presentDateObject.year, this.presentDateObject.month, 32).getDate();
    },

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
    position: relative;
    color: white;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    >.Img {
      width: 100%;
      height: 100%;
    }
    >.Text {
      position: absolute;
    }
  }
}

.dayBox {
  border-radius: 100%;
  border: 0.1px solid white;
}
</style>
