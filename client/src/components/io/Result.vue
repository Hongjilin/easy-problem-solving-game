<template>

    <div>
        <audio preload="auto" loop id="success" :src="require('@/assets/audio/yes1.mp3')"></audio>
        <audio preload="auto" loop id="no" :src="require('@/assets/audio/no1.mp3')"></audio>
        <div v-if="score >= 60" style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
            <!-- <img src="../io/images/up.png" style="width:150px;float:right;margin-top:20px;margin-right:70px" alt="" @click="goToHome"> -->
            <div class="homeImg">
                <div>{{elapsed}}秒</div>
                <div style="left:57%">{{score}}分</div>
                <img style="width:200px" class="img1" src="../io/images/result3.png" alt="" @click="goToAgainGame">
                <img style="width:190px" class="img2" src="../io/images/result4.png" alt="" @click="goToHome">
                <img style="width:205px" class="img3" src="../io/images/result5.png" alt="" @click="goToRankList">
            </div>
        </div>
        <div v-if="score < 60" style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
            <!-- <img src="../io/images/up.png" style="width:150px;float:right;margin-top:20px;margin-right:70px" alt="" @click="goToHome"> -->
            <div class="homeImg homeImg1">
                <div>{{elapsed}}秒</div>
                <div style="left:57%">{{score}}分</div>
                <img style="width:200px" class="img1" src="../io/images/result3.png" alt="" @click="goToAgainGame">
                <img style="width:190px" class="img2" src="../io/images/result4.png" alt="" @click="goToHome">
                <img style="width:205px" class="img3" src="../io/images/result5.png" alt="" @click="goToRankList">
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'Result',
    data() {
    return {
        elapsed:0,
        score:0,
        userInfo:[],
        isOff: false,
        isOff1:false
    }
  },
  mounted() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (!userInfo) {
            this.$router.push('/login')
        }
        this.userInfo = userInfo
        this.elapsed = this.$route.query.elapsed
        this.score = this.$route.query.score
        if (this.$route.query.score < 60) {
            this.isOff1 = true
            this.changeNoOn()
            setTimeout(()=>{
                this.isOff1 = false
                this.changeNoOn()
            },2500)
        } else {
            this.isOff = true
            this.changeSeccessOn()
            setTimeout(()=>{
                this.isOff = false
                this.changeSeccessOn()
            },2500)
        }
  },
  methods:{
    changeSeccessOn(){
        let oAudio = document.querySelector("#success");
        if(this.isOff){
        oAudio.play();//让音频文件开始播放     
        }else{
        oAudio.load();//让音频文件暂停播放 
        }
    //    this.isOff = !this.isOff;
    },
    changeNoOn(){
        let oAudio = document.querySelector("#no");
        if(this.isOff1){
        oAudio.play();//让音频文件开始播放     
        }else{
        oAudio.load();//让音频文件暂停播放 
        }
    //    this.isOff = !this.isOff;
        },
    async goToHome(){
        this.$router.push('/home')
    },
    async goToAgainGame(){
        this.$router.push('/gamehome')
    },
    async goToRankList(){
        this.$router.push('/ranklist')
    },
  }
}
</script>
<style lang="scss" scoped>
    .background{
        min-width:1200px;
        background: url('../io/images/login6.png') no-repeat center center;
        // background-size:100%;
    }
    .homeImg{
        width:1200px;height:800px;position:absolute;top:30%;left:50%;transform: translate(-50%,-40%);
        background:url('../io/images/result2.png') no-repeat center center;
        // background:url('../io/images/result1.png') no-repeat center center;
        background-size:100%;
        div{
            position:absolute;top:68%;left:41%;transform: translate(0%,-18%);
            color: rgb(230, 230, 230);
            font-size: 16px;
        }
        .img1{
            width:600px;height:80px;position:absolute;top:80%;left:50%;transform: translate(-61%,0%);
        }
        .img2{
            width:600px;height:80px;position:absolute;top:80%;left:35%;transform: translate(-63%,0%);
        }
        .img3{
            width:600px;height:80px;position:absolute;top:80%;left:67%;transform: translate(-63%,0%);
        }
    }
    .homeImg1{
        top:35%;
        background:url('../io/images/result1.png') no-repeat center center;
        background-size:100%;
    }
</style>