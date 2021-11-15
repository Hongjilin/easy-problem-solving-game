<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <div class="hometap">
            <img src="../io/images/answer1.png" style="width:1200px" alt="">
            <img src="../io/images/answer2.png" style="width:1200px" alt="">
            <img src="../io/images/answer3.png" style="width:1200px" alt="">
            <div style="position:absolute;top:140%;margin-left:30%">答题时间：100秒</div>
            <div style="position:absolute;top:140%;margin-left:56%">当前得分：100分</div>
        </div>
            <img src="../io/images/home5.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt="">

        <div class="background1">
            <div class="around">
            </div>
            <div class="around1">
                <div style="color:white;font-size:24px">请输入答案：</div>
                <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="" @click="login1">
                <img style="width:150px;margin-left:130px" class="answerImg" src="../io/images/answer7.png" alt="" @click="login">
                <img style="width:95px;margin-left:100px" class="answerAction" src="../io/images/answer10.png" alt="" @click="login">
                <img style="width:108px;margin-left:195px" class="answerAction" src="../io/images/answer9.png" alt="" @click="login">
                <img style="width:100px;margin-left:320px" class="answerAction" src="../io/images/answer11.png" alt="" @click="login">
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'Answer',
    data() {
    return {
        input_user: '',
        input_pwd:'',
    }
  },
  methods:{
      /**
       * 登录
       * 用户名：username:this.input_user,
       * 密码：password:this.input_pwd,
       */
     async login(){
         console.log("333")
    },
    async login1(){
         console.log("222")
    },

      open3(v) {
          this.$message({
              message:v,
              type: 'warning'
          });
      },
  }
}
</script>
<style lang="scss" scoped>
    .background{
        min-width:1200px;
        // background: url('../io/images/login6.png') no-repeat center center;
        // background-size:100%;
    }
    .background1{
        width:1200px;height:600px;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);
        .around{
            width:50%;height:500px;position:absolute;top:25%;left:20%;transform: translate(-50%,0%);
            background: url('../io/images/answer4.png') no-repeat center center;
            background-size:100%;
        }
        .around1{
            width:60%;height:500px;position:absolute;top:25%;left:56%;transform: translate(-20%,0%);
            background: url('../io/images/answer5.png') no-repeat center center;
            background-size:100%;
            div{
                position:absolute;top:45%;left:15%;
            }
            .answerImg{
                position:absolute;top:55%;left:13%;
            }
            .answerAction{
                position:absolute;top:68%;left:25%;
            }
        }
    }
    .hometap{
        width:1200px;height:100px;position:absolute;top:10%;left:50%;transform: translate(-50%,-50%);
        div{
            font-size: 22px;
            font-weight: bold;
        }
    }
</style>