<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <div class="background1">
            <div class="around">
                <img style="width:200px" src="../thread/images/login2.png" alt="">
                <img style="width:197px" src="../thread/images/login3.png" alt="">
            </div>
            <div class="around1">
                <div class="input1">
                    <input type="text" v-model="input_user">
                </div>
                <div class="input2">
                    <input type="password" v-model="input_pwd">
                </div>
            </div>
            <div class="around2">
                <input type="checkbox" style="margin-top:6px">
                <img src="../thread/images/login5.png" style="width:80px" alt="">
                <img src="../thread/images/login6.png" style="width:80px;margin-left:80px" alt="">
            </div>
            <div class="around3">
                <img src="../thread/images/login7.png" style="width:200px" alt="" @click="login">
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'Loginth',
    data() {
        return {
            input_user: '',
            input_pwd:'',
        }
    },
    methods:{
        async login(){
            if (!this.input_user || !this.input_pwd){
                this.open3("用户名,密码不能为空")
                // this.input_user=""
                // this.input_pwd=""
            }else{
                const res =  await this.$Http.post('/users/login',{
                    id:this.input_user,
                    password: this.input_pwd,
                    type:1
                })
                console.log(res,'resresres')
                if (res.code == 200) {
                    this.$router.push('/thhome')
                }
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
    .background{
        min-width:1200px;
        background: url('../thread/images/login8.png') no-repeat center center;
        background-size:100%;
    }
    .background1{
        width:610px;height:450px;position:absolute;top:50%;left:49%;transform: translate(-49%,-50%);
        background: url('../thread/images/login1.png') no-repeat center center;
        background-size:100%;
        .around{
            width:400px;height:50px;position:absolute;top:25%;left:50%;transform: translate(-45%,-50%);
            // background:rgba(255,255,255,0.5)
        }
        .around1{
            width:400px;height:100px;position:absolute;top:40%;left:50%;transform: translate(-46%,-30%);
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
                     width:280px;height:24px;background-color:transparent;border:none;outline:none;font-size:20px;color:rgb(254,153,1);
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