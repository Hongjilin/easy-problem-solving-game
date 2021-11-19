<template>

<div>
    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background" v-if="score >= 60">
        <img src="../thread/images/home4.png" style="width:150px;float:right;margin-top:00px;margin-right:70px" alt="">
        <div class="homeImg">
            <div class="div1">得分：{{score}}分</div>
            <div class="div2">闯关时间：{{elapsed}}秒</div>
            <img style="width:210px" class="img1" src="../thread/images/result4.png" alt="" @click="goToHome">
            <img style="width:160px" class="img2" src="../thread/images/result3.png" alt="" @click="goToAgainGame">
            <img style="width:210px" class="img3" src="../thread/images/result5.png" alt="" @click="goToRankList">
        </div>
    </div>
    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background" v-if="score < 60">
        <img src="../thread/images/home4.png" style="width:150px;float:right;margin-top:00px;margin-right:70px" alt="">
        <div class="homeImg homeImg1">
            <div class="div1">得分：{{score}}分</div>
            <div class="div2">闯关时间：{{elapsed}}秒</div>
            <img style="width:210px" class="img1" src="../thread/images/result4.png" alt="" @click="goToHome">
            <img style="width:160px" class="img2" src="../thread/images/result3.png" alt="" @click="goToAgainGame">
            <img style="width:210px" class="img3" src="../thread/images/result5.png" alt="" @click="goToRankList">
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
    }
  },
  mounted() {
        this.elapsed = this.$route.query.elapsed
        this.score = this.$route.query.score
  },
  methods:{
    async goToHome(){
        this.$router.push('/thhome')
    },
    async goToAgainGame(){
        this.$router.push('/thgamehome')
    },
    async goToRankList(){
        this.$router.push('/thranklist')
    },

  }
}
</script>
<style lang="scss" scoped>
    .background{
        min-width:1200px;
        background: url('../thread/images/login8.png') no-repeat center center;
        background-size:100%;
    }
    .homeImg{
        width:1000px;height:800px;position:absolute;top:30%;left:50%;transform: translate(-50%,-40%);
        background:url('../thread/images/result2.png') no-repeat center center;
        // background:url('../thread/images/result1.png') no-repeat center center;
        background-size:100%;
        div{
            position:absolute;top:60%;left:41%;transform: translate(0%,-15%);
        }
        .div1{
            color: rgb(230, 230, 230);
            margin-left: 12px;
            margin-top: -8px;
            font-size: 28px;
        }
        .div2{
            color: rgb(230, 230, 230);
            font-size: 36px;
            margin-top: 110px;
            margin-left: -48px;
        }
        .img1{
            width:600px;height:85px;position:absolute;top:82%;left:52%;transform: translate(-64%,0%);
        }
        .img2{
            width:600px;height:79px;position:absolute;top:82%;left:35%;transform: translate(-60%,0%);
        }
        .img3{
            width:600px;height:85px;position:absolute;top:82%;left:67%;transform: translate(-53%,0%);
        }
    }
    .homeImg1{
        top:35%;
        background:url('../thread/images/result1.png') no-repeat center center;
        background-size:100%;
    }
</style>