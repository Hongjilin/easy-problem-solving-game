<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <div class="hometap">
            <img src="../thread/images/answer2.png" style="width:100px" alt="">
            <img src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-11px" alt="">
            <!-- <img src="../thread/images/answer2.png" style="width:100px;margin-left:-11px" alt="">
            <img src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-11px" alt=""> -->
            <img src="../thread/images/answer3.png" style="width:106px;margin-left:-7px;" alt="">
            <img src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-18px" alt="">
            <!-- <img src="../thread/images/answer2.png" style="width:100px;margin-left:-11px" alt="">
            <img src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-11px" alt=""> -->
            <img src="../thread/images/answer3.png" style="width:106px;margin-left:-14px;" alt="">
            <img src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-18px" alt="">
            <!-- <img src="../thread/images/answer2.png" style="width:100px;margin-left:-11px" alt="">
            <img src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-11px" alt=""> -->
            <img src="../thread/images/answer3.png" style="width:106px;margin-left:-14px;" alt="">
            <img src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-18px" alt="">
            <!-- <img src="../thread/images/answer2.png" style="width:100px;margin-left:-11px" alt=""> -->
            <img src="../thread/images/answer3.png" style="width:106px;margin-left:-14px;" alt="">
        </div>
        <img src="../thread/images/home4.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt="">
        <div>
            <div style="position:absolute;top:62px;left:70%">100秒</div><br>
            <div style="position:absolute;top:83px;left:70%">100分</div>
            <img src="../thread/images/answer1.png" style="width:300px;float:right;margin-top:10px;margin-right:70px" alt="">
        </div>

        <div class="background1">
            <div class="around">
            </div>
            <div class="around1">
                <div style="color:white;font-size:24px">
                    <img style="width:180px;margin-left:-20px" src="../thread/images/answer4.png" alt="">
                </div>
                <img style="width:150px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login1">
                <img style="width:150px;margin-left:130px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login">
                <img style="width:120px;margin-left:100px" class="answerAction" src="../thread/images/answer8.png" alt="" @click="login">
                <img style="width:130px;margin-left:209px" class="answerAction" src="../thread/images/answer9.png" alt="" @click="login">
                <img style="width:130px;margin-left:320px;margin-top:-2px" class="answerAction" src="../thread/images/answer10.png" alt="" @click="login">
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'Answerth',
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
        background: url('../thread/images/login8.png') no-repeat center center;
        background-size:100%;
    }
    .background1{
        width:1200px;height:600px;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);
        .around{
            width:57%;height:500px;position:absolute;top:25%;left:20%;transform: translate(-50%,0%);
            background: url('../thread/images/answer5.png') no-repeat center center;
            background-size:100%;
        }
        .around1{
            width:55%;height:500px;position:absolute;top:25%;left:60%;transform: translate(-20%,0%);
            background: url('../thread/images/answer6.png') no-repeat center center;
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
    }
</style>