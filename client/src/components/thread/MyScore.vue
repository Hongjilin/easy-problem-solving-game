<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <img src="../thread/images/home4.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt="">
        <div class="welcome"></div>
        <div class="background1">
            <div class="around">
                <img style="width:800px" src="../thread/images/myscore3.png" alt="">
                <div style="width:100%;position:absolute;font-size:20px;margin-left:57px;overflow:hidden">
                    <ul style="list-style:none;overflow:scroll;width:1200px;height:370px;overflow-y:scroll;overflow-x:hidden;">
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div >{{ index + 1 }}</div>
                            <div >{{item.username}}</div>
                            <div style="margin-left:48px">{{item.io_score}}</div>
                            <div style="margin-left:33px">{{item.elapsed}}</div>
                        </li>
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div >{{ index + 1 }}</div>
                            <div >{{item.username}}</div>
                            <div style="margin-left:48px">{{item.io_score}}</div>
                            <div style="margin-left:33px">{{item.elapsed}}</div>
                        </li>
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div >{{ index + 1 }}</div>
                            <div >{{item.username}}</div>
                            <div style="margin-left:48px">{{item.io_score}}</div>
                            <div style="margin-left:33px">{{item.elapsed}}</div>
                        </li>
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div >{{ index + 1 }}</div>
                            <div >{{item.username}}</div>
                            <div style="margin-left:48px">{{item.io_score}}</div>
                            <div style="margin-left:33px">{{item.elapsed}}</div>
                        </li>
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div >{{ index + 1 }}</div>
                            <div >{{item.username}}</div>
                            <div style="margin-left:48px">{{item.io_score}}</div>
                            <div style="margin-left:33px">{{item.elapsed}}</div>
                        </li>
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div >{{ index + 1 }}</div>
                            <div >{{item.username}}</div>
                            <div style="margin-left:48px">{{item.io_score}}</div>
                            <div style="margin-left:33px">{{item.elapsed}}</div>
                        </li>
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div >{{ index + 1 }}</div>
                            <div >{{item.username}}</div>
                            <div style="margin-left:48px">{{item.io_score}}</div>
                            <div style="margin-left:33px">{{item.elapsed}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'MyScoreth',
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
        width:1200px;height:600px;position:absolute;top:19%;left:49%;transform: translate(-49%,-1%);
        background: url('../thread/images/myscore1.png') no-repeat center center;
        background-size:100%;
        .around{
            width:100%;height:50px;position:absolute;top:15%;left:49%;transform: translate(-50%,0%);
            img{
                margin-left: 200px;
            }
        }
    }
    .welcome{
        width:80%;height:200px;position:absolute;top:0%;left:50%;transform: translate(-50%,0%);
        background:url('../thread/images/myscore2.png') no-repeat center center;
        background-size:100%;
    }
    .rankList{
        margin-left: 10px;
        div{
            display: flex;
            justify-content: center;
            width:230px;
            &:first-child{
                margin-right: -17px;
            }
        }
    }
</style>