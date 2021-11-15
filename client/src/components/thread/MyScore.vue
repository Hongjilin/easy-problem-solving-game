<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <img src="../thread/images/home4.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt="">
        <div class="welcome"></div>
        <div class="background1">
            <div class="around">
                <img style="width:1200px" src="../thread/images/myscore3.png" alt="" @click="login1">
                <div style="width:100%;position:absolute;margin-top:-30px;font-size:20px;">
                    <ul style="list-style: none;">
                        <li style="margin-bottom:17px;margin-left:120px">
                            <span>1</span>
                            <span style="margin-left:211px">2</span>
                            <span style="margin-left:198px">2</span>
                            <span style="margin-left:230px">2</span>
                            <span style="margin-left:198px">2</span>
                        </li>
                        <li style="margin-bottom:17px;margin-left:120px">2</li>
                        <li style="margin-bottom:17px;margin-left:120px">3</li>
                        <li style="margin-bottom:17px;margin-left:120px">4</li>
                        <li style="margin-bottom:17px;margin-left:120px">5</li>
                        <li style="margin-bottom:17px;margin-left:120px">5</li>
                        <li style="margin-bottom:17px;margin-left:120px">6</li>
                        <li style="margin-bottom:17px;margin-left:120px">7</li>
                        <li style="margin-bottom:17px;margin-left:120px">8</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'MyScoreth',
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
        background: url('../thread/images/login8.png') no-repeat center center;
        background-size:100%;
    }
    .background1{
        width:1200px;height:600px;position:absolute;top:19%;left:49%;transform: translate(-49%,-1%);
        background: url('../thread/images/myscore1.png') no-repeat center center;
        background-size:100%;
        .around{
            width:100%;height:50px;position:absolute;top:15%;left:49%;transform: translate(-50%,0%);
        }
    }
    .welcome{
        width:80%;height:200px;position:absolute;top:0%;left:50%;transform: translate(-50%,0%);
        background:url('../thread/images/myscore2.png') no-repeat center center;
        background-size:100%;
    }
</style>