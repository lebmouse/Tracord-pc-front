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
</style>
