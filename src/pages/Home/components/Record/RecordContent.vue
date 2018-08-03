<template>
<div class="RecordContent">
  <music-slide class="music-slide"></music-slide>
  <music-note class="music-note"></music-note>
  <music-player class="music-player"></music-player>
</div>
</template>
<script>
import musicSlide from './MusicSlide'
import MusicNote from './MusicNote'
import MusicPlayer from './MusicPlayer'
export default {
  name: 'RecordContent',
  components: {
    musicSlide,
    MusicNote,
    MusicPlayer
  }

}
</script>
<style lang='scss' scoped>
.music {
  &-slide {
    height: 40%;
    width: 100%;
  }
  &-note {
    height: 40%;
    width: 100%;
    background-color:orangered;
  }
  &-player {
    height: 20%;
    width: 100%;
    background-color:olive;
  }
}
</style>
