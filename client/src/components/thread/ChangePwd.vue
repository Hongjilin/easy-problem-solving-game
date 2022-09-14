<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <img src="./images/up.png" style="cursor:pointer;width:150px;float:right;margin-top:20px;margin-right:70px" alt="" @click="up">
        <div class="background1">
            <div class="around1">
                <!-- <img src="./images/changepwd1.png" style="width:380px" alt=""><br> -->
                <img src="./images/changepwd2.png" style="width:380px" alt=""><br>
                <img src="./images/changepwd3.png" style="width:380px" alt=""><br>
                <img src="./images/changepwd4.png" style="width:380px" alt="">
                <div class="input1">
                    <!-- <input type="text" placeholder="请输入用户名" v-model="input_user"> -->
                    <input type="text" style="margin-top:2px" placeholder="请输入原密码" v-model="old_passowrd">
                </div>
                <div class="input2">
                    <input type="password" placeholder="请输入新密码" v-model="new_password">
                    <input type="password" style="margin-top:27px;margin-left:10px" placeholder="请输入确认密码" v-model="again_password">
                </div>
            </div>
            <div class="around3">
                <img src="../thread/images/changepwd6.png" style="width:150px" alt="" @click="submit">
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'Loginth',
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
            this.$router.push('/thlogin')
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
                this.$router.push('/thhome')
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
        background: url('../thread/images/login8.png') no-repeat center center;
        // background-size:100%;
    }
    .background1{
        width:610px;height:450px;position:absolute;top:50%;left:49%;transform: translate(-49%,-50%);
        background: url('../thread/images/changepwd5.png') no-repeat center center;
        background-size:100%;
        .around{
            width:400px;height:50px;position:absolute;top:25%;left:50%;transform: translate(-45%,-50%);
        }
        .around1{
            width:400px;height:100px;position:absolute;top:25%;left:50%;transform: translate(-46%,0%);
            .input1{
                position:absolute;
                top:12px;
                margin-left:100px;
                input{
                     width:280px;height:24px;background-color:transparent;border:none;outline:none;font-size:16px;color:rgb(254,153,1);
                }
            }
            .input2{
                position:absolute;
                top:70px;
                margin-left:100px;
                input{
                     width:280px;height:24px;background-color:transparent;border:none;outline:none;font-size:16px;color:rgb(254,153,1);
                }
            }
        }
        .around2{
            width:300px;position:absolute;top:50%;left:50%;transform: translate(-38%,70%);
            input{
                position:absolute;top:3%;left:1.5%;border:none;outline:none;font-size:20px;color:rgb(254,153,1);
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
                // left:0.5%;
                width: 10px;
                height: 10px;
                border: 1px solid #CACDCF;
                background-color: rgb(254,153,1);
                color: #fff;
                border: 1px solid rgb(254,153,1);
                font-size: 12px;
            }
            
        }
        .around3{
            position:absolute;top:68%;left:50%;transform: translate(-50%,0%);
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