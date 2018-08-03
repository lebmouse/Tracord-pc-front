<template>
<div class="MusicNote">
  <div class="container">
    <div class="title">
      <i class="fas fa-music"></i> CIFIKA - SOAK(Oddman jay Remix)
      <i class="fas fa-music"></i>
    </div>
    <div class="diary">
      <div class="contents gray-box">
        옛날에 오빠가 추천해준 노랜데 문득 생각나서 요즈음 한창 듣고 있다. <br> 매력적인 목소리에 신나는 비트가 정말 좋다. <br> 미세먼지 때문에 기분이 꿀꿀해서 그런지 신나는 노래만 듣게 된다.
      </div>
    </div>
    <div class="information gray-box">
      <div class="temperature">
        <i class="fas fa-umbrella"></i> 24℃ 
      </div>
      <div class="location">전주시 덕진구 덕진광장로 12 할리스커피 전북대점</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'MusicNote'
}
</script>
<style lang='scss' scoped>
.container {
  // width: 800px;
  height: 100%;
  background-color: navy;
  margin: auto;
  color:white;
  text-align: center;
  display:flex;
  flex-wrap:wrap;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  // align-content:space-around;
  .gray-box{
    
    min-width: 550px;
    min-height: 20%;
    padding-top:15px;
    padding-bottom:15px;
    background-color:slategray;
  }
  .title{
    font-size : 40px;
    padding-top:15px;
  }
  .temperature{
    font-size:25px;
    padding-bottom:8px;
  }
}
</style>
