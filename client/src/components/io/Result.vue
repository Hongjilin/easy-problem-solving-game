<!--
 * @Description: 描述
 * @Version: 版本
 * @Autor: Zhu Song
 * @Date: 2021-11-13 20:20:10
 * @LastEditors: Zhu Song
 * @LastEditTime: 2021-11-14 14:08:18
-->
<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <img src="../io/images/home5.png" style="width:150px;float:right;margin-top:00px;margin-right:70px" alt="">
        <div class="homeImg">
            <div>111秒</div>
            <div style="left:57%">100分</div>
            <img style="width:200px" class="img1" src="../io/images/result3.png" alt="" @click="login1">
            <img style="width:190px" class="img2" src="../io/images/result4.png" alt="" @click="login">
            <img style="width:205px" class="img3" src="../io/images/result5.png" alt="" @click="login">
        </div>
    </div>

</template>
<script>
export default {
    name:'Result',
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
</style>