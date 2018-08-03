<template>
<div class="MusicPlayer">
  <audio controls style="height:10px" id="audio" @timeupdate="updateBar">
    <source src="@/assets/music/KARD_Ride on the wind.mp3" type="audio/mp3">
    </audio>
  <div class="container">

    <button>TODAY</button>

    <div id="player">
      <div id="current-time" class="time-text">{{currentTime}}</div>
      <div id="progress">
        <div id="meter" :style="{'width':percentage+'%'}"></div>
      </div>
      <div id="duration" class="time-text">{{duration}}</div>
      <div class="volume">
        <div class="volume_controler">
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
    logout() {
      firebase.auth().signOut().then(() => {
        alert('로그아웃 되었습니다.');
        this.$router.replace('/')
      })
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
      console.log(isDown)
    }
    progress.onmouseup = (e) => {
      e.preventDefault();
      isDown = false;
      tracMove(e)
      console.log(isDown)
    }
    progress.onmousemove = (e) => {
      if (isDown) {
        tracMove(e)
      }
    }

    let volumeProgress = document.getElementById('volume_progress'),
      volumeMeter = document.getElementById('volume_meter'),
      volumeMove = (e) => {
        percentage = e.offsetY / volumeProgress.clientHeight * 100
        consl
        audio.volume = percentage;
      }

    volumeProgress.onclick = (e) => {
      console.log('e.offsetY: ' + e.offsetY)
      console.log('volumeProgress.clientHeight: ' + volumeProgress.clientHeight)
      console.log('per: ' + (1 - e.offsetY / volumeProgress.clientHeight))
      this.volume = 1 - e.offsetY / volumeProgress.clientHeight
    }

    // volumeProgress.onmousedown = (e) => {
    //   e.preventDefault();
    //   isDown = true;
    // }
    // volumeProgress.onmouseup = (e) => {
    //   e.preventDefault();
    //   isDown = false;
    //   volumeMove(e)
    // }
    // volumeProgress.onmousemove = (e) => {
    //   if (isDown) {
    //     volumeMove(e)
    //   }
    // }


  }
}
</script>
<style lang='scss' scoped>
.MusicPlayer {
  position: relative;
  display: flex;
  justify-content: center;
  >.container {
    display: flex;
    // width: 30%;
    height: 6%;
    position: fixed;
    bottom: 0%;
    // background-color: #fff;
    #player {
      margin-left: 3%;
      margin-right: 3%;
      min-width: 300px;
      height: 100%;
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
    height: 100%;
    background-color: white;
  }
}

.volume {
  position: relative;
  &_controler {
    position: absolute;
    top: -82px;
    left: -2px;
    height: 80px;
    width: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    // display: flex;
    #volume_progress {
      background-color: rgba(255, 255, 255, 0.5);
      height: 90%;
      width: 3px;
      margin: auto;
      margin-top: 20%;
      #volume_meter {
        position: absolute;
        bottom:0;
        width: 3px;
        background-color: white;
      }
    }
  }
}
</style>
