<!--
 * @Description: 描述
 * @Version: 版本
 * @Autor: Zhu Song
 * @Date: 2021-11-20 14:58:24
 * @LastEditors: Zhu Song
 * @LastEditTime: 2021-11-25 23:18:24
-->
<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <img src="./images/up.png" style="cursor: pointer;width:150px;float:right;margin-top:20px;margin-right:70px" alt="" @click="up">
        
        <!-- <img src="./images/up.png" style="width:150px;float:right;margin-top:20px;margin-right:70px" alt="" @click="up"> -->
        <!-- <img src="../thread/images/home4.png" style="width:150px;float:right;margin-top:00px;margin-right:70px" alt=""> -->
        <div class="homeImg">
            <img style="cursor: pointer;width:240px" class="img1" src="../thread/images/gamehome2.png" alt="" @click="goToAnswer"><br>
            <img style="cursor: pointer;width:170px" class="img2" src="../thread/images/gamehome3.png" alt="" @click="goToRankList">
            <img style="cursor: pointer;width:180px" class="img3" src="../thread/images/gamehome4.png" alt="" @click="goToMyScore">
        </div>
    </div>

</template>
<script>
export default {
    name:'GameHometh',
    data() {
        return {
            input_user: '',
            input_pwd:'',
            userInfo: []
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
        goToAnswer() {
            this.$router.push('/thanswer')
        },
        
        goToMyScore() {
            this.$router.push('/thmyscore')
        },
        
        goToRankList() {
            this.$router.push('/thranklist')
        },
        up() {
            this.$router.push('/thhome')
        }
    }
}
</script>
<style lang="scss" scoped>
    .background{
        min-width:1200px;
        background: url('../thread/images/login8.png') no-repeat center center;
        // background-size:100%;
    }
    .homeImg{
        width:600px;height:800px;position:absolute;top:30%;left:50%;transform: translate(-50%,-40%);
        background:url('../thread/images/gamehome1.png') no-repeat center center;
        background-size:100%;
        .img1{
            height:80px;position:absolute;top:75%;left:50%;transform: translate(-50%,0%);
        }
        .img2{
            height:70px;position:absolute;top:85%;left:30%;transform: translate(-50%,0%);
        }
        .img3{
            height:70px;position:absolute;top:85%;left:70%;transform: translate(-50%,0%);
        }
    }
</style>