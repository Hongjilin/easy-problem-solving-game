<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <div class="hometap">
            <img src="../thread/images/home1.png" style="width:225px" alt="">
            <img src="../thread/images/home2.png" style="width:200px" alt="" @click="goToMyScore">
            <img src="../thread/images/home3.png" style="width:200px" alt="" @click="goToRankList">
        </div>
            <img src="../thread/images/home4.png" style="width:150px;float:right;margin-top:-100px;margin-right:70px" alt="">

        <div class="background1">
            <div class="around">
                <img style="width:210px" src="../thread/images/home5.png" alt="" @click="login1"><br>
                <div>洪吉林</div>
                <img style="width:230px" src="../thread/images/home12.png" alt="" @click="login">
            </div>
            <div class="around1">
                <img style="width:200px" src="../thread/images/home7.png" alt="" @click="goToGameHome"><br>
                <img style="width:200px" src="../thread/images/home8.png" alt="" @click="goToGameHome">
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'Hometh',
    data() {
        return {
            input_user: '',
            input_pwd:'',
        }
    },
    methods:{
        goToMyScore() {
            this.$router.push('/thmyscore')
        },
        
        goToRankList() {
            this.$router.push('/thranklist')
        },

        goToGameHome() {
            this.$router.push('/thgamehome')
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
        width:850px;height:650px;position:absolute;top:50%;left:55%;transform: translate(-50%,-45%);
        background: url('../thread/images/home6.png') no-repeat center center;
        background-size:100%;
        .around{
            width:400px;height:50px;position:absolute;top:18%;left:0%;transform: translate(-70%,0%);
            div{
                margin-left: 68px;
                color: rgb(192, 160, 100);
                font-size: 24px;
                font-weight:bolder;
                text-shadow: 5px 5px 5px rgb(0, 0, 0);
            }
        }
        .around1{
            width:400px;height:100px;position:absolute;top:32%;left:40%;transform: translate(-50%,-50%);
        }
    }
    .hometap{
        margin-top: 10px;
        margin-left: 50px;
    }
</style>