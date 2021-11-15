<!--
 * @Description: 描述
 * @Version: 版本
 * @Autor: Zhu Song
 * @Date: 2021-11-13 20:20:10
 * @LastEditors: Zhu Song
 * @LastEditTime: 2021-11-14 14:09:15
-->
<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <img src="../io/images/home5.png" style="width:150px;float:right;margin-top:00px;margin-right:70px" alt="">
        <div class="homeImg">
            <img style="width:180px" class="img1" src="../io/images/gamehome7.png" alt="" @click="login1"><br>
            <img style="width:152px" class="img2" src="../io/images/gamehome11.png" alt="" @click="login">
            <img style="width:180px" class="img3" src="../io/images/gamehome13.png" alt="" @click="login2">
        </div>
    </div>

</template>
<script>
export default {
    name:'GameHome',
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
    async login2(){
         console.log("444")
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
    .homeImg{
        width:600px;height:800px;position:absolute;top:30%;left:50%;transform: translate(-50%,-40%);
        background:url('../io/images/gamehome2.png') no-repeat center center;
        background-size:100%;
        .img1{
            height:80px;position:absolute;top:82%;left:50%;transform: translate(-63%,0%);
        }
        .img2{
            height:70px;position:absolute;top:90%;left:35%;transform: translate(-63%,0%);
        }
        .img3{
            height:70px;position:absolute;top:90%;left:65%;transform: translate(-63%,0%);
        }
    }
</style>