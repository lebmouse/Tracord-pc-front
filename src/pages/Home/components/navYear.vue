<template>
<navigation :order="1">
  <h1 slot="head">2018</h1>
  <h2 slot="subHead">year</h2>

  <div class="Contents" slot="contents">
    <div class="head-line">
    </div>
    <div class="Contents_body">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(year,index) in years" :key="index">
            <div class="slide_head">
              {{year.year}}
            </div>
            <year-board :recordYear="year"></year-board>
          </div>
        </div>
      </div>
    </div>
  </div>
</navigation>
</template>
<script>
import YearBoard from './YearBoard.vue'
import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar
} from 'swiper/dist/js/swiper.esm.js';
Swiper.use([Navigation, Pagination, Scrollbar]);

export default {
  name: 'navYear',
  data() {
    return {
      years: [{
          year: 2015
        },
        {
          year: 2016
        },
        {
          year: 2017
        },
        {
          year: 2018
        }
      ]
    }
  },
  components: {
    YearBoard
  },
  mounted() {
    let mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView: 4,
      spaceBetween: 65,
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    });
  }
}
</script>
<style lang='scss' scoped>
.Contents {
  position: relative;
  height: 100%;
  .head-line {
    // background-color: blue;
    border-bottom: 1px solid white;
    height: 35px;
    width: 100%;
    position: absolute;
  }
  &_body {
    position: relative;
    width: 1200px;
    height: 90%;
    min-height: 600px;
    // background-color: red;
    // margin-top:5%;
    margin-left: auto;
    margin-right: 60px;
  }
  .swiper {
    &-container {
      height: 100%;
    }
    &-wrap {
      height: 100%;
    }
    &-slide {
      height: 100%;
      // background-color: red;
      >.slide_head {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: white;
        height: 70px;
        font-size: 28px;
        margin-left:55px;
        width:180px;
      }
    }
  }
}
</style>
