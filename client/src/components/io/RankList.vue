<!--
 * @Description: 描述
 * @Version: 版本
 * @Autor: Zhu Song
 * @Date: 2021-11-13 20:52:37
 * @LastEditors: Zhu Song
 * @LastEditTime: 2021-11-14 14:13:10
-->
<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <img src="../io/images/home5.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt="">
        <div class="welcome"></div>
        <div class="background1">
            <div class="around">
                <img style="width:1200px" src="../io/images/ranklist4.png" alt="" @click="login1">
                <img style="width:80px;margin-left:126px" src="../io/images/ranklist5.png" alt="" @click="login"><br>
                <img style="width:80px;margin-left:126px" src="../io/images/ranklist6.png" alt="" @click="login"><br>
                <img style="width:80px;margin-left:126px" src="../io/images/ranklist7.png" alt="" @click="login">
                <div style="color:white;width:100%;position:absolute;margin-top:-200px;font-size:20px;">
                    <ul style="list-style: none;">
                        <li style="margin-bottom:36px;margin-left:120px">
                            <span>1</span>
                            <span style="margin-left:155px">2</span>
                            <span style="margin-left:219px">2</span>
                            <span style="margin-left:192px">2</span>
                            <span style="margin-left:223px">2</span>
                        </li>
                        <li style="margin-bottom:36px;margin-left:120px">2</li>
                        <li style="margin-bottom:36px;margin-left:120px">3</li>
                        <li style="margin-bottom:36px;margin-left:120px">4</li>
                        <li style="margin-bottom:36px;margin-left:120px">5</li>
                        <li style="margin-bottom:36px;margin-left:120px">5</li>
                        <li style="margin-bottom:36px;margin-left:120px">6</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'RankList',
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
          if (!this.input_user || !this.input_pwd){
                this.open3("用户名,密码不能为空")
              this.input_user=""
              this.input_pwd=""
          }else{
           const res =  await this.$Http.post('/users/login',{
              id:1701130050,
              password: 123456,
              type:1
            })
        console.log(res,"resresresres")

          }
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
        width:1200px;height:600px;position:absolute;top:50%;left:49%;transform: translate(-49%,-40%);
        background: url('../io/images/ranklist3.png') no-repeat center center;
        background-size:100%;
        .around{
            width:100%;height:50px;position:absolute;top:11%;left:50%;transform: translate(-50%,-50%);
        }
    }
    .welcome{
        width:80%;height:100px;position:absolute;top:10%;left:50%;transform: translate(-50%,-10%);
        background:url('../io/images/ranklist2.png') no-repeat center center;
        background-size:100%;
    }
</style>