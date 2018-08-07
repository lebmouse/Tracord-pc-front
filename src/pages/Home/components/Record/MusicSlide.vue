<template>
<div class="MusicSlide">
  <div class="music-swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="index in 30" :key="index">
        <div class="month-head">
          {{index}}th
        </div>
        <div class="cover" @click="coverClick">
          <img class="cover_img" src="http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/02/2017021615033620072-540x540.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
  <span class="button button-backward">
  <i class="fas fa-step-backward"></i>
  </span>
  <span class="button button-play">
  <i :class="playButton" @click="playing"></i>
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
  data() {
    return {
      isPlay: false,
      beforeTrack: null
    }
  },
  computed: {
    playButton() {
      if (this.isPlay) {
        return 'fas fa-pause'
      } else {
        return 'fas fa-play'
      }
    }
  },
  methods: {
    playing() {
      let audio = document.getElementById('audio')
      if (this.isPlay) {
        audio.pause();
      } else {
        audio.play();
      }
      this.isPlay = !this.isPlay
    },
    coverClick(e) {
      let coverEl = document.getElementsByClassName('cover'),
        arrayCoverEl = Array.from(coverEl),
        coverIndex = arrayCoverEl.indexOf(e.currentTarget);
      e.currentTarget.classList.add('cover-active');
      if (this.beforeTrack !== null) {
        console.log(this.beforeTrack);
        coverEl[this.beforeTrack].classList.remove('cover-active')
      }
      this.beforeTrack = coverIndex;
    }
  },
  watch: {
    isPlay() {
      let coverImg = document.getElementsByClassName('cover_img')[0]
      if (this.isPlay) {
        coverImg.classList.add('play-active')
      } else {
        coverImg.classList.remove('play-active')
      }
    }
  },
  mounted() {
    let mySwiper = new Swiper('.music-swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      direction: 'horizontal',
    });
  },
  updated() {

  }
}
</script>
<style lang='scss' scoped>
.MusicSlide {
  position: relative;
  padding-top: 10px;
  .month-head {
    color: white;
    font-size: 30px;
    text-align: center;
    padding-bottom: 5px;
  }
  .cover {
    margin: auto;
    width: 340px;
    height: 340px;
    border: 1.3px solid white;
    border-radius: 100%;
    box-sizing: border-box;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.2s;
    &_img {
      height: 100%;
      width: 100%;
      transform: rotate(0deg);
    }
    &_img.play-active {
      animation: rotateCover 3s linear;
      animation-direction: normal;
      animation-iteration-count: infinite;
      transform: scale(1.1);
      // transform: rotate(360deg);
      @keyframes rotateCover {
        0% {
          transform: rotate(1deg)
        }
        100% {
          transform: rotate(360deg)
        }
      }
    }
  }
  .cover.cover-active {
    transition: 0.3s;
    box-shadow: 0px 0px 15px 3px white;
  }
  .button {
    background-color: rgba(255, 255, 255, 0);
    position: absolute;
    top: 50%;
    z-index: 1;
    color: white;
    font-size: 35px;
    &.button-backward {
      left: 15%;
    }
    &.button-play {
      left: 49%;
    }
    &.button-forward {
      left: 83%;
    }
  }
}
</style>
