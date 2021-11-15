<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <div class="hometap">
            <img src="../io/images/home1.png" style="width:200px" alt="">
            <img src="../io/images/home2.png" style="width:200px" alt="">
            <img src="../io/images/home3.png" style="width:200px" alt="">
            <img src="../io/images/home4.png" style="width:200px" alt="">
        </div>
            <img src="../io/images/home5.png" style="width:150px;float:right;margin-top:-100px;margin-right:70px" alt="">

        <div class="background1">
            <div class="around">
                <img style="width:210px" src="../io/images/home7.png" alt="" @click="login1"><br>
                <div>洪吉林</div>
                <img style="width:200px" src="../io/images/home8.png" alt="" @click="login">
            </div>
            <div class="around1">
                <img style="width:200px" src="../io/images/home9.png" alt="" @click="login1"><br>
                <img style="width:200px" src="../io/images/home10.png" alt="" @click="login">
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'Home',
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
        background: url('../io/images/login6.png') no-repeat center center;
        background-size:100%;
    }
    .background1{
        width:850px;height:650px;position:absolute;top:50%;left:55%;transform: translate(-50%,-45%);
        background: url('../io/images/home6.png') no-repeat center center;
        background-size:100%;
        .around{
            width:400px;height:50px;position:absolute;top:18%;left:0%;transform: translate(-70%,0%);
            div{
                margin-left: 68px;
                color: rgb(192, 160, 100);
                font-size: 24px;
                font-weight:bolder;
                text-shadow: 5px 5px 5px rgb(0, 0, 0);
            }
        }
        .around1{
            width:400px;height:100px;position:absolute;top:32%;left:40%;transform: translate(-50%,-50%);
        }
    }
    .hometap{
        margin-top: 10px;
        margin-left: 50px;
    }
</style>