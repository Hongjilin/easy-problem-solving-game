<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <!-- <transition name="el-fade-in-linear">
            <el-card class="box-card" shadow="hover" style="text-align: center"    @keyup.enter.native="login" >
                <div slot="header" class="clearfix" style="text-align: center">
                    <h2 style="font-size: 1rem">IO综合应用仿真程序脚本</h2>
                </div>
                <el-input prefix-icon="el-icon-user-solid" v-model="input_user" placeholder="请输入学号" class="inp"></el-input>
                <div style="height: 1.3rem"></div>
                <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="input_pwd" show-password class="inp" ></el-input>
                <el-button type="primary" class="button" size="small" @click="login">登录</el-button>
            </el-card>
        </transition> -->
        <div class="welcome"></div>
        <div class="background1">
            <div class="around">
                <img style="width:193px" src="../io/images/login4.png" alt="" @click="login1">
                <img style="width:201px" src="../io/images/login2.png" alt="" @click="login">
            </div>
            <div class="around1">
                <div class="input1">
                    <input type="text" placeholder="请学生账号">
                </div>
                <div class="input2">
                    <input type="password" placeholder="请输入密码">
                </div>
            </div>
            <div class="around2">
                <input type="checkbox">
                <img src="../io/images/login7.png" style="width:80px" alt="">
                <img src="../io/images/login9.png" style="width:65px;margin-left:215px" @click="login1" alt="">
            </div>
            <div class="around3">
                <img src="../io/images/login8.png" style="width:120px" alt="" @click="login1">
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'Login',
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
        width:610px;height:450px;position:absolute;top:50%;left:49%;transform: translate(-49%,-50%);
        background: url('../io/images/login3.png') no-repeat center center;
        background-size:100%;
        .around{
            width:400px;height:50px;position:absolute;top:20%;left:50%;transform: translate(-45%,-50%);
            // background:rgba(255,255,255,0.5)
        }
        .around1{
            width:400px;height:100px;position:absolute;top:40%;left:50%;transform: translate(-46%,-50%);
            background: url('../io/images/login5.png') no-repeat;
            background-size:100%;
            .input1{
                margin-top:12px;
                margin-left:83px;
                input{
                     width:280px;height:24px;background-color:transparent;border:none;outline:none;font-size:20px;color:rgb(36,253,254);
                }
            }
            .input2{
                margin-top:23px;
                margin-left:83px;
                input{
                     width:280px;height:24px;background-color:transparent;border:none;outline:none;font-size:20px;color:rgb(36,253,254);
                }
            }
        }
        .around2{
            width:365px;position:absolute;top:51%;left:49%;transform: translate(-45%,-20%);
            input{
                position:absolute;top:3%;left:1.5%;border:none;outline:none;font-size:20px;color:rgb(36,253,254);
            }
            input[type="checkbox"] {
                text-align: center;
                // vertical-align: middle;
                // text-align: center;
                // vertical-align: middle;
                line-height: 11px;
            }
            input[type="checkbox"]::before {
                content: "";
                position: absolute;
                background: #fff;
                left:0.5%;
                width: 10px;
                height: 10px;
                border: 1px solid #CACDCF
            }
            input[type="checkbox"]:checked::before {
                content: "✓";
                position: absolute;
                background: #fff;
                // left:0.5%;
                width: 10px;
                height: 10px;
                border: 1px solid #CACDCF;
                background-color: rgb(36,253,254);
                color: #fff;
                // position: absolute;
                // margin-top: -2px;
                // left: 0;
                // // width: 100%;
                border: 1px solid rgb(36,253,254);
                font-size: 12px;
                // font-weight: bold;
            }
            
        }
        .around3{
            position:absolute;top:65%;left:50%;transform: translate(-38%,-50%);
        }
    }
    input::-webkit-input-placeholder{
                color:rgb(36,253,254);
            }
            input::-moz-placeholder{   /* Mozilla Firefox 19+ */
                color:rgb(36,253,254);
            }
            input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                color:rgb(36,253,254);
            }
            input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
                color:rgb(36,253,254);
            }
    .welcome{
        width:600px;height:100px;position:absolute;top:20%;left:50%;transform: translate(-50%,-50%);
        background:url('../io/images/login1.png') no-repeat center center;
        background-size:100%;
    }
</style>