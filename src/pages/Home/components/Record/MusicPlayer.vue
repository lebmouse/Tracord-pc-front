<template>
<div class="MusicPlayer">
  <audio id="audio" @timeupdate="updateBar">
    <source src="@/assets/music/KARD_Ride on the wind.mp3" type="audio/mp3">
    </audio>
  <div class="container">

    <button @click="userPrint">TODAY</button>

    <div id="player">
      <div id="current-time" class="time-text">{{currentTime}}</div>
      <div id="progress">
        <div id="meter" :style="{'width':percentage+'%'}"></div>
      </div>
      <div id="duration" class="time-text">{{duration}}</div>
      <div id="volume">
        <div id="volume_controler">
          <div id="volume_progress">
            <div id="volume_meter" :style="{'height':volumePercentage+'%'}"></div>
          </div>
        </div>
        <i class="fas fa-volume-up"></i>
      </div>
    </div>

    <button @click="logout">Logout</button>

  </div>
</div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'MusicPlayer',
  data() {
    return {
      canvasWidth: 500,
      currentTime: "0 :00",
      duration: "0 :00",
      audioDuration: 0,
      percentage: 0,
      volume: 1,
    }
  },
  computed: {
    audioEl() {
      return document.getElementById("audio")
    },
    volumePercentage() {
      return this.volume * 100;
    }
  },
  methods: {
    userPrint(){
      console.log(firebase.auth().currentUser)
    },
    logout() {
      this.$store.dispatch('syncSignOut')
    },
    updateBar(e) {
      this.currentTime = this.convertElapsedTime(e.target.currentTime)
      this.percentage = this.audioEl.currentTime / this.audioEl.duration * 100
    },
    convertElapsedTime(input) {
      let seconds = Math.floor(input % 60);
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      let minutes = Math.floor(input / 60)
      return minutes + " :" + seconds
    },
    trackClick(e) {
      let progress = document.getElementById('progress'),
        percentage = e.offsetX / progress.clientWidth
      this.audioEl.currentTime = percentage * this.audioDuration;
    },
    tracDrag(e) {
      let progress = document.getElementById('progress'),
        percentage = e.offsetX / progress.clientWidth
      this.audioEl.currentTime = percentage * this.audioDuration;
    }
  },
  mounted() {
    //audio태그에서 src가 로딩되면 this.duration에 값을 초기화
    let audio = document.getElementById('audio')

    audio.ondurationchange = () => {
      this.audioDuration = audio.duration
      this.duration = this.convertElapsedTime(audio.duration)
      this.volume = audio.volume
    };

    //audio progress를 작동하게끔 하는 변수와 메소드들
    let progress = document.getElementById('progress'),
      percentage = null,
      isDown = false,
      tracMove = (e) => {

        percentage = e.offsetX / progress.clientWidth
        audio.currentTime = percentage * this.audioDuration;
      }
    progress.onmousedown = (e) => {
      e.preventDefault();
      isDown = true;
    }
    progress.onmouseup = (e) => {
      e.preventDefault();
      isDown = false;
      tracMove(e)
    }
    progress.onmousemove = (e) => {
      if (isDown) {
        tracMove(e)
      }
    }

    let volumeProgress = document.getElementById('volume_progress'),
      volumeMeter = document.getElementById('volume_meter'),
      isVolumeDown = false;

    volumeProgress.onmousedown = (e) => {
      e.preventDefault();
      isVolumeDown = true;
    }
    volumeProgress.onmouseup = (e) => {
      e.preventDefault();
      isVolumeDown = false;
      let outVolume = 1 - e.offsetY / volumeProgress.clientHeight;
      this.volume = outVolume
      audio.volume = outVolume
    }
    volumeProgress.onmousemove = (e) => {
      if (isVolumeDown) {
        let outVolume = 1 - e.offsetY / volumeProgress.clientHeight;
        this.volume = outVolume
        audio.volume = outVolume
      }
    }

  }
}
</script>
<style lang='scss' scoped>
.MusicPlayer {
  position: relative;
  background-color: blue;
  display: flex;
  justify-content: center;
  >.container {
    z-index: 3;
    display: flex;
    position: fixed;
    // height: 6%;
    // left:0;
    bottom: 0%;
    #player {
      margin-left: 3%;
      margin-right: 3%;
      min-width: 300px;
      height: 45px;
      background-color: black;
      border: 1px solid white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
      font-size: 15px;
      #progress {
        width: 60%;
      }
      .time-text {
        color: white;
      }
    }
  }
}

#progress {
  background-color: rgba(255, 255, 255, 0.5);
  width: 250px;
  height: 5px;
  &:hover {
    transition: 0.15s;
    // transform: scaleY(2);
    box-shadow: 0px 0px 2px 1px white;
  }
  #meter {
    pointer-events: none;
    height: 100%;
    background-color: white;
  }
}

#volume {
  position: relative;
  &_controler {
    visibility: hidden;
    position: absolute;
    top: -82px;
    left: -2px;
    height: 80px;
    width: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    #volume_progress {
      position: relative;
      background-color: red;
      height: 90%;
      width: 3px;
      margin: auto;
      margin-top: 20%;
      #volume_meter {
        pointer-events: none;
        position: absolute;
        height: 100%;
        bottom: 0;
        width: 3px;
        background-color: white;
      }
    }
  }
  &:hover &_controler {
    visibility: visible;
  }
}
</style>
