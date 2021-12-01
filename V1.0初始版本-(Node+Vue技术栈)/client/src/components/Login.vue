<template>

    <div style="width: 25%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);">
        <transition name="el-fade-in-linear">
            <el-card class="box-card" shadow="hover" style="text-align: center"    @keyup.enter.native="login" >
                <div slot="header" class="clearfix" style="text-align: center">
                    <h2 style="font-size: 1rem">IO综合应用仿真程序脚本</h2>
                </div>
                <el-input prefix-icon="el-icon-user-solid" v-model="input_user" placeholder="请输入学号" class="inp"></el-input>
                <div style="height: 1.3rem"></div>
                <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="input_pwd" show-password class="inp" ></el-input>
                <el-button type="primary" class="button" size="small" @click="login">登录</el-button>
            </el-card>
        </transition>
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
    .login{
        h3{
            text-align: center;
            height: 60px;
            line-height: 20px;
            border-bottom: 1px solid rgb(170, 170, 170);
            color: rgb(92, 92, 92);
        }
            .inp{
            margin-top: 10px;
        }
        .button{
            margin-top: 20px;
            position: fixed;left:50%;transform: translateX(-50%);
        }
    }
</style>