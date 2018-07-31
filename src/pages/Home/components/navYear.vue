<template>
<navigation :order="1">
  <h1 slot="head">2018</h1>
  <h2 slot="subHead">year</h2>
  <div class="Contents" slot="contents">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <year-board class="swiper-slide" v-for="(year,index) in years" :key="index" :recordYear="year"></year-board>
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
          year: '2015'
        },
        {
          year: '2016'
        },
        {
          year: '2017'
        },
        {
          year: '2018'
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
      spaceBetween: 50,
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
  width: 1200px;
  height: 100%;
  min-height: 600px;
  background-color: red;
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
  }
}
</style>
