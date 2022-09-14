<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
            <img src="../io/images/up.png" @click="up" style="cursor: pointer;width:150px;float:right;margin-top:20px;margin-right:70px" alt="">
        
        <div class="background1">
            <div class="around1">
                <!-- <img src="./images/changpwd4.png" style="width:380px" alt=""><br> -->
                <img src="./images/changpwd3.png" style="width:380px" alt=""><br>
                <img src="./images/changpwd1.png" style="width:380px" alt=""><br>
                <img src="./images/changpwd2.png" style="width:380px" alt="">

                <div class="input1">
                    <!-- <input type="text" v-model="input_user" placeholder="请输入账号"> -->
                    <input type="text" style="margin-left: 25px;margin-top:2px" v-model="old_passowrd" placeholder="请输入旧密码">
                </div>
                <div class="input2">
                    <input type="password" style="margin-left:25px;" v-model="new_password" placeholder="请输入新密码">
                    <input type="password" style="margin-left:25px;margin-top:25px" v-model="again_password" placeholder="请输入确定密码">
                </div>
            </div>
            <div class="around3">
                <img src="../io/images/changpwd6.png" style="width:100px" alt="" @click="submit">
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'ChangePwd',
    data() {
        return {
            userInfo: [],
            old_passowrd:'',
            new_password:'',
            again_password:'',
            pwd: ''
        }
    },
    mounted() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (!userInfo) {
            this.$router.push('/login')
        }
        this.userInfo = userInfo
    },
    methods:{
        up() {
            this.$router.go(-1)
        },
        async submit(){
            if (!this.old_passowrd.trim()){
                return this.open("请输入原密码",'warning')
            }
            if (!this.new_password.trim()){
                return this.open("请输入新密码",'warning')
            }
            if (!this.again_password.trim()){
                return this.open("请输入确认密码",'warning')
            }
            if (this.new_password.trim() != this.again_password.trim()){
                return this.open("新密码与确认密码不相同",'warning')
            }
            const res =  await this.$Http.post('/users/editPWD',{
                uid:this.userInfo.uid,
                old_passowrd: this.old_passowrd,
                new_password:this.new_password
            })
            console.log(res,'resresres')
            if (res.code == 200 && res.affectedRows > 0) {
                this.open('修改成功','success')
                this.$router.push('/home')
            } else {
                this.open('输入的旧密码与原密码相同或旧密码错误','warning')
            }
        },
    
        open(message,type) {
            this.$message({
                message:message,
                type: type
            });
        },
    }
}
</script>
<style lang="scss" scoped>
    .background{
        min-width:1200px;
        background: url('../io/images/login6.png') no-repeat center center;
        // background-size:100%;
    }
    .background1{
        width:610px;height:450px;position:absolute;top:50%;left:49%;transform: translate(-49%,-50%);
        background: url('../io/images/changpwd5.png') no-repeat center center;
        background-size:100%;
        .around{
            width:400px;height:50px;position:absolute;top:20%;left:50%;transform: translate(-45%,-50%);
        }
        .around1{
            width:400px;height:100px;position:absolute;top:20%;left:50%;transform: translate(-46%,-0%);
            background-size:100%;
            .input1{
                position:absolute;
                top: 11%;
                margin-left:78px;
                input{
                     width:280px;height:24px;background-color:transparent;border:none;outline:none;font-size:20px;color:rgb(36,253,254);
                }
            }
            .input2{
                position:absolute;
                top: 67px;
                margin-left:78px;
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
                width: 10px;
                height: 10px;
                border: 1px solid #CACDCF;
                background-color: rgb(36,253,254);
                color: #fff;
                border: 1px solid rgb(36,253,254);
                font-size: 12px;
            }
            
        }
        .around3{
            position:absolute;top:65%;left:50%;transform: translate(-42%,0%);
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