<template>
<div class="MusicSlide">
  <div class="music-swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="index in 30" :key="index">
        <div class="month-head">
          {{index}}th
        </div>
        <div class="cover">
          <img src="http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/02/2017021615033620072-540x540.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
  <span class="button button-backward">
  <i class="fas fa-step-backward"></i>
  </span>
  <span class="button button-play">
  <i class="fas fa-play"></i>
  </span>
  <span class="button button-forward">
  <i class="fas fa-step-forward"></i>
  </span>
</div>
</template>
<script>
import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar
} from 'swiper/dist/js/swiper.esm.js';
Swiper.use([Navigation, Pagination, Scrollbar]);

export default {
  name: 'MusicSlide',
  mounted() {
    let mySwiper = new Swiper('.music-swiper-container', {
      // Optional parameters
      slidesPerView: 3,
      spaceBetween: 80,
      centeredSlides: true,
      // slidesOffsetAfter:40,
      slidesOffsetBefore: 5,
      direction: 'horizontal',
    });
  }
}
</script>
<style lang='scss' scoped>
.MusicSlide {
  position: relative;
  padding-top: 20px;
  background-color: red;
  // height:100%;
  .month-head {
    color: white;
    font-size: 30px;
    text-align: center;
    padding-bottom: 5px;
  }
  .cover {
    position:relative;
    width: 300px;
    height: 300px;
    border: 1.3px solid white;
    border-radius: 100%;
    box-sizing: border-box;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .99;
    overflow: hidden;
  }
  .button {
    background-color: rgba(255, 255, 255, 0);
    position: absolute;
    top: 50%;
    z-index: 1;
    color: white;
    font-size: 35px;
    &.button-backward {
      left: 14%;
    }
    &.button-play {
      left: 50%;
    }
    &.button-forward {
      left: 86%;
    }
  }
}
</style>
