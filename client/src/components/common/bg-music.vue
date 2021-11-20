<template>
<div>
  <audio preload="auto" loop id="audio" :src="require('@/assets/audio/bgm1.mp3')"></audio>
  <audio preload="auto" loop id="success" :src="require('@/assets/audio/yes1.mp3')"></audio>
  <audio preload="auto" loop id="audio" :src="require('@/assets/audio/no1.mp3')"></audio>
  <div @click="changeOn" :class="isOff?'isOff':'isOn'"></div>
  <!-- <div  @click="changeSeccessOn">闯关成功</div> -->
  </div>
</template>

 
<script>
export default {
  name: "animation",
 data() {
      return {
          isOff:true
      }
    },
mounted() {
        // 自动播放音乐效果，解决微信自动播放问题
       document.addEventListener('touchstart',this.audioAutoPlay,false);
       document.addEventListener('WeixinJSBridgeReady', this.audioAutoPlay,false);
       let oAudio = document.querySelector("#audio");
        oAudio.onended = function () {//播放完毕，重新循环播放
            oAudio.load();
            oAudio.play();
        }
    },
    mounted(){
        setTimeout( this.changeOn,1500)
    },

 methods: { 
           changeOn(){
                let oAudio = document.querySelector("#audio");
               if(this.isOff){
                oAudio.play();//让音频文件开始播放     
               }else{
                oAudio.pause();//让音频文件暂停播放 
               }
               this.isOff = !this.isOff;
           },
           audioAutoPlay() {
                let audio = document.getElementById('audio');
                    this.isOff = false;
                    audio.play();
                document.removeEventListener('touchstart',this.audioAutoPlay);
            },
           changeSeccessOn(){
                let oAudio = document.querySelector("#success");
               if(this.isOff){
                oAudio.play();//让音频文件开始播放     
               }else{
                oAudio.pause();//让音频文件暂停播放 
               }
               this.isOff = !this.isOff;
           },
           audioSeccessAutoPlay() {
                let audio = document.getElementById('success');
                    this.isOff = false;
                    audio.play();
                document.removeEventListener('touchstart',this.audioAutoPlay);
            }
    }

};
</script>
 <style lang="scss" scoped>
.isOn{
    width: 28px;
    height: 28px;
    position: fixed;
    z-index: 2000;
    top: 20px;
    left: 20px;
    background: url("../../assets/images/musicbtn.png") 0 0 no-repeat;
    background-size:100%; 
}
@keyframes rotating {
    from { -webkit-transform: rotate(0) }
    to { -webkit-transform: rotate(360deg) }
 }
@-webkit-keyframes rotating {
    from { -webkit-transform: rotate(0) }
    to { -webkit-transform: rotate(360deg) }
 }
.isOff{
    width: 28px;
    height: 28px;
    position: fixed;
    z-index: 2000;
    top: 20px;
    left: 20px;
    background: url("../../assets/images/musicof.png") 0 0 no-repeat;
    background-size:100%; 
}
</style>

