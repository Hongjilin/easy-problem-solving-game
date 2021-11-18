<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <img src="../thread/images/home4.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt="">
        <div class="welcome"></div>
        <div class="background1">
            <div class="around">
                <img style="width:800px" src="../thread/images/ranklist3.png" alt=""><br>
                <div style="width:1100px;position:absolute;font-size:20px;overflow:hidden;">
                    <ul style="list-style:none;overflow:scroll;width:100%;height:340px;overflow-y:scroll;overflow-x:hidden;">
                        <li class="rankList" style="margin-top:-3px;margin-bottom:28px;display:flex;position: relative" v-for="(item, index) in list" :key="index">
                            <img style="width:80px;position:absolute;margin-left:68px;margin-top:-15px" v-if="index==0" src="../thread/images/ranklist4.png">
                            <img style="width:80px;position:absolute;margin-left:68px;margin-top:-20px" v-if="index==1" src="../thread/images/ranklist5.png">
                            <img style="width:80px;position:absolute;margin-left:68px;margin-top:-15px" v-if="index==2" src="../thread/images/ranklist6.png">
                            <div >{{ (index < 3) ? '': index + 1 }}</div>
                            <div style="margin-left:-70px">{{item.username}}</div>
                            <div style="margin-left:-31px">{{item.io_score}}</div>
                            <div style="margin-left:-43px">{{item.elapsed}}</div>
                            <div style="margin-left:17px">{{2}}</div>
                        </li>
                        <li class="rankList" style="margin-top:-5px;margin-bottom:28px;display:flex" v-for="(item, index) in list" :key="index">
                            <div>{{ index + 1 }}</div>
                            <div style="margin-left:-70px">{{item.username}}</div>
                            <div style="margin-left:-31px">{{item.io_score}}</div>
                            <div style="margin-left:-43px">{{item.elapsed}}</div>
                            <div style="margin-left:17px">{{100}}</div>
                        </li>
                        <li class="rankList" style="margin-top:-5px;margin-bottom:28px;display:flex" v-for="(item, index) in list" :key="index">
                            <div>{{ index + 1 }}</div>
                            <div style="margin-left:-70px">{{item.username}}</div>
                            <div style="margin-left:-31px">{{item.io_score}}</div>
                            <div style="margin-left:-43px">{{item.elapsed}}</div>
                            <div style="margin-left:17px">{{2}}</div>
                        </li>
                        <li class="rankList" style="margin-top:-5px;margin-bottom:28px;display:flex" v-for="(item, index) in list" :key="index">
                            <div>{{ index + 1 }}</div>
                            <div style="margin-left:-70px">{{item.username}}</div>
                            <div style="margin-left:-31px">{{item.io_score}}</div>
                            <div style="margin-left:-43px">{{item.elapsed}}</div>
                            <div style="margin-left:17px">{{2}}</div>
                        </li>
                        <li class="rankList" style="margin-top:-5px;margin-bottom:28px;display:flex" v-for="(item, index) in list" :key="index">
                            <div>{{ index + 1 }}</div>
                            <div style="margin-left:-70px">{{item.username}}</div>
                            <div style="margin-left:-31px">{{item.io_score}}</div>
                            <div style="margin-left:-43px">{{item.elapsed}}</div>
                            <div style="margin-left:17px">{{2}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'RankListth',
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
        background: url('../thread/images/login8.png') no-repeat center center;
        background-size:100%;
    }
    .background1{
        width:1200px;height:600px;position:absolute;top:50%;left:49%;transform: translate(-49%,-40%);
        background: url('../thread/images/ranklist2.png') no-repeat center center;
        background-size:100%;
        .around{
            width:100%;height:0px;position:absolute;top:15%;left:50%;transform: translate(-35%,-50%);
        }
    }
    .welcome{
        width:80%;height:200px;position:absolute;top:0%;left:50%;transform: translate(-50%,0%);
        background:url('../thread/images/ranklist1.png') no-repeat center center;
        background-size:100%;
    }
    .rankList{
        margin-left: -114px;
        div{
            display: flex;
            justify-content: center;
            width:215px;
            &:first-child{
                // margin-right: -70px;
            }
        }
    }
</style>