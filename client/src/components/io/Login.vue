<template>
    <div
        style="
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        "
        class="background"
    >
        <div class="welcome"></div>
        <div class="background1">
            <div class="around">
                <div class="login-tab-left">
                    <div class="boxShadow" v-if="type == 1"/>
                    <img :style="type == 1?'top:-1px':'top:0px'" src="../io/images/login4.png" @click="student" alt="" />
                </div>
                <div class="login-tab-right">
                    <div class="boxShadow" v-if="type == 2 || type == 3"/>
                    <img
                        :style="(type == 2 || type == 3)?'top:-1px':'top:0px'"
                        src="../io/images/login2.png"
                        @click="teacher"
                        alt=""
                    />
                </div>
            </div>
            <div class="around1">
                <div class="input1" v-if="type == 1">
                    <input type="text" v-model="input_user" placeholder="请学生账号" />
                </div>
                <div class="input2" v-if="type == 1">
                    <input type="password" v-model="input_pwd" placeholder="请输入密码" />
                </div>
                <div class="input1" v-if="type == 2 || type == 3">
                    <input type="text" v-model="input_user" placeholder="请教师账号" />
                </div>
                <div class="input2" v-if="type == 2 || type == 3">
                    <input type="password" v-model="input_pwd" placeholder="请输入密码" />
                </div>
            </div>
            <div class="around2" v-if="type == 2 || type == 3">
                <input @click="checkYes" type="checkbox"><div style="margin-left:24px;color: rgb(36, 253, 254);font-size:14px">超级权限</div>
                <!-- <img src="../io/images/login7.png" style="width:80px" alt=""> -->
                <!-- <img src="../io/images/login9.png" style="width:65px;margin-left:215px" alt=""> -->
            </div>
            <div class="around3">
                <img class="hover" src="../io/images/login8.png" style="width: 100px;cursor:pointer;" alt="" @click="login" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Login",
    data() {
        return {
            type: 1,
            input_user: "",
            input_pwd: "",
            check: false,
        }
    },
    methods: {
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
        async login() {
            if (!this.input_user || !this.input_pwd) {
                this.open3("用户名,密码不能为空")
            } else {
                const res = await this.$Http.post("/users/login", {
                    id: this.input_user,
                    password: this.input_pwd,
                    type: this.type,
                })
                if (res.code == 200 && res != "用户名,密码不能为空") {
                    console.log(res.data[0].id, "2123121231231")
                    let userInfo = {
                        uid: res.data[0].id,
                        username: res.data[0].username,
                        type: res.data[0].type,
                    }
                    userInfo = JSON.stringify(userInfo)
                    localStorage.setItem("userInfo", userInfo)
                    if (this.type == 1) {
                        this.$router.push("/home")
                    } else {
                        this.$router.push("/admin/userControl")
                    }
                } else {
                    this.open("用户名或密码错误")
                }
            }
        },

        open(v) {
            this.$message({
                message: v,
                type: "warning",
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.background {
    min-width: 1200px;
    background: url("../io/images/login6.png") no-repeat center center;
    // background-size:100%;
}
.background1 {
    width: 610px;
    height: 450px;
    position: absolute;
    top: 50%;
    left: 49%;
    transform: translate(-49%, -50%);
    background: url("../io/images/login3.png") no-repeat center center;
    background-size: 100%;
    .around {
        width: 400px;
        // height: 50px;
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translate(-45%, -50%);
        display: flex;
        // background:rgba(255,255,255,0.5)
        .login-tab-left {
            margin-bottom: 1px;
            width: 193px;
            position: relative;
            .boxShadow {
                position: absolute;
                left: 11%;
                top: 10px;
                box-shadow: 1px 1px 15px rgba(10, 13, 13, 0.9);
                width: 171px;
                height: 36px;
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
            margin-bottom: 1px;
            width: 201px;
            position: relative;
            .boxShadow {
                position: absolute;
                left: 0%;
                top: 10px;
                box-shadow: 1px 1px 15px rgba(14, 13, 13, 0.9);
                width: 171px;
                height: 36px;
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
    .around1 {
        width: 400px;
        height: 100px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-46%, -50%);
        background: url("../io/images/login5.png") no-repeat;
        background-size: 100%;
        .input1 {
            margin-top: 12px;
            margin-left: 83px;
            input {
                width: 280px;
                height: 24px;
                background-color: transparent;
                border: none;
                outline: none;
                font-size: 20px;
                color: rgb(36, 253, 254);
            }
        }
        .input2 {
            margin-top: 23px;
            margin-left: 83px;
            input {
                width: 280px;
                height: 24px;
                background-color: transparent;
                border: none;
                outline: none;
                font-size: 20px;
                color: rgb(36, 253, 254);
            }
        }
    }
    .around2 {
        width: 365px;
        position: absolute;
        top: 51%;
        left: 49%;
        transform: translate(-45%, -20%);
        input {
            position: absolute;
            top: 3%;
            left: 1.5%;
            border: none;
            outline: none;
            font-size: 20px;
            color: rgb(36, 253, 254);
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
            left: 0.5%;
            width: 10px;
            height: 10px;
            border: 1px solid #cacdcf;
        }
        input[type="checkbox"]:checked::before {
            content: "✓";
            position: absolute;
            background: #fff;
            // left:0.5%;
            width: 10px;
            height: 10px;
            border: 1px solid #cacdcf;
            background-color: rgb(36, 253, 254);
            color: #fff;
            // position: absolute;
            // margin-top: -2px;
            // left: 0;
            // // width: 100%;
            border: 1px solid rgb(36, 253, 254);
            font-size: 12px;
            // font-weight: bold;
        }
    }
    .around3 {
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-38%, -50%);
        .hover:hover{
            background-image: url('./images/login10.png');
            background-size: 100%;
        }
    }
}
input::-webkit-input-placeholder {
    color: rgb(36, 253, 254);
}
input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: rgb(36, 253, 254);
}
input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: rgb(36, 253, 254);
}
input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgb(36, 253, 254);
}
.welcome {
    width: 600px;
    height: 100px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url("../io/images/login1.png") no-repeat center center;
    background-size: 100%;
}
</style>
