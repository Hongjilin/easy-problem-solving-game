<!--
 * @Description: 描述
 * @Version: 版本
 * @Autor: Zhu Song
 * @Date: 2021-11-13 20:52:37
 * @LastEditors: Zhu Song
 * @LastEditTime: 2021-11-18 19:36:51
-->
<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <img src="../io/images/home5.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt="">
        <div class="welcome"></div>
        <div class="background1">
            <div class="around">
                <img style="width:950px;margin-left:125px" src="../io/images/ranklist4.png" alt="">
                <div style="color:white;width:100%;position:absolute;font-size:20px;overflow:hidden;">
                    <ul style="list-style:none;overflow:scroll;width:1200px;height:445px;overflow-y:scroll;overflow-x:hidden;">
                        <li class="rankList" style="margin-bottom:36px;display:flex;position: relative;" v-for="(item, index) in list" :key="index">
                            <img style="width:80px;position:absolute;margin-left:68px;margin-top:-10px" v-if="index==0" src="../io/images/ranklist5.png" alt="">
                            <img style="width:80px;position:absolute;margin-left:68px;margin-top:-10px" v-if="index==1" src="../io/images/ranklist6.png" alt="">
                            <img style="width:80px;position:absolute;margin-left:68px;margin-top:-10px" v-if="index==2" src="../io/images/ranklist7.png" alt="">
                            <div v-if="index!=1||index!=2||index!=0">{{ index + 1 }}</div>
                            <div style="margin-left:-36px">{{item.username}}</div>
                            <div style="margin-left:30px">{{item.io_score}}</div>
                            <div style="margin-left:3px">{{item.elapsed}}</div>
                            <div style="margin-left:35px">{{1701130078}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'RankList',
    data() {
    return {
        list: []
    }
  },
  mounted() {
      this.resRankList()
  },
  methods:{
    async resRankList(){
        const res = await this.$Http.get('/scorecard/rankingList',{
            number:6,
            type:'io_score'
        })
        if (res.data.code == 200) {
            this.list = res.data.data
        }
        console.log(res.data.data,"resresresres")
    }
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
        width:1200px;height:600px;position:absolute;top:50%;left:49%;transform: translate(-49%,-40%);
        background: url('../io/images/ranklist3.png') no-repeat center center;
        background-size:100%;
        .around{
            width:100%;height:50px;position:absolute;top:11%;left:50%;transform: translate(-50%,-50%);
            div{
                
            }
        }
    }
    .welcome{
        width:80%;height:100px;position:absolute;top:10%;left:50%;transform: translate(-50%,-10%);
        background:url('../io/images/ranklist2.png') no-repeat center center;
        background-size:100%;
    }
    .rankList{
        margin-left: 10px;
        div{
            display: flex;
            justify-content: center;
            width:215px;
            &:first-child{
                // margin-right: -37px;
            }
        }
    }
</style>