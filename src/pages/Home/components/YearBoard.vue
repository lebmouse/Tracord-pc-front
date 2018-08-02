<template>
<div ref="yearBoard" class="YearBoard" @scroll="roll">
  <div class="month-head">
    <div class="text" v-for="m in month" :key="'m'+m">
      {{m}}
    </div>
  </div>
  <div class="Table">
    <div class="before-box" v-for="beforeDay in beforeYear" :key="'beforeDay'+beforeDay">
    </div>
    <div class="month-box" v-for="month in 12" :key="'month'+month" @click="monthFocus" @mouseover="monthUp(month)" @mouseout="monthOut(month)">
      <div class="day-box" v-for="day in monthLength[month-1]" :key="'day'+day">
        {{month}},{{day}}
      </div>
    </div>
  </div>
  <div class="curtain curtain--head"></div>
  <div class="curtain curtain--foot"></div>
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
  data() {
    return {
      yearData: null,
      month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  computed: {
    dateObject() {
      return new Date(this.recordYear.year);
    },
    monthLength() {
      let endMonthRay = [],
        year = this.recordYear.year,
        month = 0;
      for (let i = 0; i < 12; i++) {
        endMonthRay[i] = 32 - new Date(year, month, 32).getDate();
        month++;
      }

      return endMonthRay
    },
    beforeYear() {
      return new Date(this.recordYear.year, 0, 1).getDay();
    }
  },
  methods: {
    roll(e) {
      let target = e.target,
        scrollTop = target.scrollTop,
        scrollMaxTop = target.scrollHeight - target.clientHeight,
        yearBoard = this.$refs.yearBoard,
        head = yearBoard.getElementsByClassName('curtain')[0].style,
        foot = yearBoard.getElementsByClassName('curtain')[1].style;
      // visibility: none;
      console.log(scrollTop)

      if (scrollTop <= 10) {
        head.display = 'none'
      } else if (scrollTop > 10 && scrollTop < 101) {
        head.opacity = scrollTop / 80;
        head.display = 'block'
      } else if (scrollTop < scrollMaxTop - 10 && scrollTop > scrollMaxTop - 100) {
        foot.opacity = (scrollMaxTop - scrollTop) / 80;
        foot.display = 'block'
      } else if (scrollTop >= scrollMaxTop - 10) {
        foot.display = 'none'

      }
    },
    monthFocus(e) {
    },
    monthUp(month) {
      let yearBoard = this.$refs.yearBoard,
        monthBox = yearBoard.getElementsByClassName('month-box')[month - 1],
        text = yearBoard.getElementsByClassName('text')[month - 1]

      monthBox.style.opacity = 1
      monthBox.classList.add('day-box-acitve')
      text.style.opacity = 1
    },
    monthOut(month) {
      let yearBoard = this.$refs.yearBoard,
        monthBox = yearBoard.getElementsByClassName('month-box')[month - 1],
        text = yearBoard.getElementsByClassName('text')[month - 1]

      monthBox.style.opacity = 0.7
      monthBox.classList.remove('day-box-acitve')
      text.style.opacity = 0.7
    }
  },
  mounted() {
    let yearBoard = this.$refs.yearBoard,
      monthText = yearBoard.getElementsByClassName('text'),
      dayBox = yearBoard.getElementsByClassName("day-box")

    let endofMonth = null,
      monthLength = this.monthLength;

    this.$nextTick(() => {
      for (let i = 1; i < 12; i++) {
        endofMonth += monthLength[i - 1]
        monthText[i].style.top = `${dayBox[endofMonth].offsetTop}px`
      }
    })

  }
}
</script>
<style lang='scss' scoped>
.day-box-acitve .day-box {
  box-shadow: 0px 0px 2px 0.5px white;
}

.YearBoard {
  position: relative;
  color: white;
  height: 87%;
  // background-color: deepskyblue;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    visibility: hidden;
    width: 0;
    height: 0;
  }
}

.month-head {
  position: relative;
  width: 39px;
  float: left;
  height: 100%;
}

.text {
  position: absolute;
  width: 50px;
  opacity: 0.7;
  transition: 0.2s;
}

.Table {
  position: relative;
  margin-left: 39px;
  height: 100%;
  .before-box {
    width: 30px;
    height: 30px;
    float: left;
  }
  >.month-box {
    position: relative;
    opacity: 0.7;
    .day-box {
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 100%;
      width: 28px;
      height: 28px;
      float: left;
      font-size: 10px;
      transition: 0.2s;
    }
  }
}

.curtain {
  width: 251px;
  height: 60px;
  position: fixed;
  &--head {
    top: 70px;
    // opacity: 0;
    display: none;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&1+0,0+100 */
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 85%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 85%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 85%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#00000000', GradientType=0);
    /* IE6-9 */
    // background-color: blue
  }
  &--foot {
    bottom: 0;
    opacity: 0.9;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&1+0,0+100 */
    background: -moz-linear-gradient(bottom, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 85%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 85%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to top, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 85%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#00000000', GradientType=0);
    /* IE6-9 */
    // background-color: blue
  }
}
</style>
