<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <div class="background1">
            <div class="around">
                <div class="login-tab-left">
                    <div class="boxShadow" v-if="type == 1"/>
                    <img :style="type == 1?'top:-1px':'top:0px'" src="../thread/images/login2.png" alt="" @click="student">
                </div>
                <div class="login-tab-right">
                    <div class="boxShadow" v-if="type == 2 || type == 3"/>
                    <img :style="(type == 2 || type == 3)?'top:-1px':'top:0px'" src="../thread/images/login3.png" alt="" @click="teacher">
                </div>
            </div>
            <div class="around1">
                <div class="input1" v-if="type == 1">
                    <input type="text" v-model="input_user" placeholder="请输入学生账号">
                </div>
                <div class="input2" v-if="type == 1">
                    <input type="password" v-model="input_pwd" placeholder="请输入密码">
                </div>
                <div class="input1" v-if="type == 2 || type == 3">
                    <input type="text" v-model="input_user" placeholder="请输入教师账号">
                </div>
                <div class="input2" v-if="type == 2 || type == 3">
                    <input type="password" v-model="input_pwd" placeholder="请输入密码">
                </div>
            </div>
            <div class="around2" v-if="type == 2 || type == 3">
                <input type="checkbox" @click="checkYes"><div style="margin-left:24px;color: rgb(254,153,1);font-size:14px">超级权限</div>
                <!-- <img src="../thread/images/login5.png" style="width:80px" alt="">
                <img src="../thread/images/login6.png" style="width:80px;margin-left:80px" alt=""> -->
            </div>
            <div class="around3">
                <img class="img1" src="../thread/images/login7.png" style="width:200px" alt="" @click="login">
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'Loginth',
    data() {
        return {
            type: 1,
            input_user: '',
            input_pwd:'',
            check: false,
        }
    },
    methods:{
        checkYes() {
            this.check = !this.check
            if (this.check) {
                this.type = 3
            } else {
                this.type = 2
            }
        },
        student() {
            this.check = false
            this.type = 1
        },
        teacher() {
            this.type = 2
        },
        async login(){
            if (!this.input_user || !this.input_pwd){
                this.open("用户名,密码不能为空")
            }else{
                const res =  await this.$Http.post('/users/login',{
                    id:this.input_user,
                    password: this.input_pwd,
                    type:this.type
                })
                if (res.code == 200 && res != '用户名,密码不能为空') {
                    let userInfo = {
                        uid:res.data[0].id,
                        username:res.data[0].username,
                        type:res.data[0].type
                    }
                    userInfo = JSON.stringify(userInfo)
                    localStorage.setItem("userInfo",userInfo)
                    if (this.type == 1) {
                        this.$router.push('/thhome')
                    } else {
                        this.$router.push('/admin/userControl')
                    }
                } else {
                    this.open("用户名或密码错误")
                }
            }
        },

        open(v) {
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
        // background-size:100%;
    }
    .background1{
        width:610px;height:450px;position:absolute;top:50%;left:49%;transform: translate(-49%,-50%);
        background: url('../thread/images/login1.png') no-repeat center center;
        background-size:100%;
        .around{
            width:400px;height:50px;position:absolute;top:25%;left:50%;transform: translate(-45%,-50%);
            // background:rgba(255,255,255,0.5)
            .login-tab-left {
                width: 200px;
                position: relative;
                .boxShadow {
                    position: absolute;
                    left: 6%;
                    top: 10px;
                    box-shadow: 1px 1px 15px rgba(10, 13, 13, 0.9);
                    width: 190px;
                    height: 48px;
                    border-radius: 1px;
                    // z-index: 1;
                }

                img {
                    cursor:pointer;
                    position: absolute;
                    // z-index: 99;
                    width: 100%;
                }
            }
            .login-tab-right {
                left: 50%;
                width: 197px;
                position: relative;
                .boxShadow {
                    position: absolute;
                    left: 0%;
                    top: 10px;
                    box-shadow: 1px 1px 15px rgba(14, 13, 13, 0.9);
                    width: 190px;
                    height: 48px;
                    border-radius: 1px;
                    z-index: 1;
                }

                img {
                    cursor:pointer;
                    position: absolute;
                    z-index: 99;
                    width: 100%;
                }
            }
        }
        .around1{
            width:400px;height:100px;position:absolute;top:43%;left:50%;transform: translate(-46%,-30%);
            background: url('../thread/images/login4.png') no-repeat;
            background-size:100%;
            .input1{
                margin-top:12px;
                margin-left:155px;
                input{
                     width:280px;height:24px;background-color:transparent;border:none;outline:none;font-size:16px;color:rgb(254,153,1);
                }
            }
            .input2{
                margin-top:23px;
                margin-left:155px;
                input{
                     width:280px;height:24px;background-color:transparent;border:none;outline:none;font-size:16px;color:rgb(254,153,1);
                }
            }
        }
        .around2{
            width:300px;position:absolute;top:57%;left:50%;transform: translate(-38%,0%);
            input{
                position:absolute;top:3%;left:1.5%;border:none;outline:none;font-size:20px;color:rgb(254,153,1);
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
                background-color: rgb(254,153,1);
                color: #fff;
                // position: absolute;
                // margin-top: -2px;
                // left: 0;
                // // width: 100%;
                border: 1px solid rgb(254,153,1);
                font-size: 12px;
                // font-weight: bold;
            }
            
        }
        .around3{
            position:absolute;top:70%;left:50%;transform: translate(-45%,-50%);
            .img1:hover{
                cursor: pointer;
                margin-top: -2px;
            }
        }
    }
    input::-webkit-input-placeholder{
                color:rgb(254,153,1);
            }
            input::-moz-placeholder{   /* Mozilla Firefox 19+ */
                color:rgb(254,153,1);
            }
            input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                color:rgb(254,153,1);
            }
            input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
                color:rgb(254,153,1);
            }
    .welcome{
        width:600px;height:100px;position:absolute;top:20%;left:50%;transform: translate(-50%,-50%);
        background:url('../thread/images/login1.png') no-repeat center center;
        background-size:100%;
    }
</style>