<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <img src="../io/images/home5.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt="">
        <div class="welcome"></div>
        <div class="background1">
            <div class="around">
                <img style="width:1000px" src="../io/images/myscore4.png" alt="">
                <div style="color:white;width:100%;position:absolute;margin-top:0px;font-size:20px;overflow:hidden;">
                    <ul style="list-style:none;overflow:scroll;width:1200px;height:450px;overflow-y:scroll;overflow-x:hidden;">
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div style="margin-left:-10px">{{ index + 1 }}</div>
                            <div style="margin-left:47px">{{item.username}}</div>
                            <div style="margin-left:185px">{{item.io_score}}</div>
                            <div style="margin-left:100px">{{item.elapsed}}</div>
                        </li>
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div style="margin-left:-10px">{{ index + 1 }}</div>
                            <div style="margin-left:47px">{{item.username}}</div>
                            <div style="margin-left:185px">{{item.io_score}}</div>
                            <div style="margin-left:100px">{{item.elapsed}}</div>
                        </li>
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div style="margin-left:-10px">{{ index + 1 }}</div>
                            <div style="margin-left:47px">{{item.username}}</div>
                            <div style="margin-left:185px">{{item.io_score}}</div>
                            <div style="margin-left:100px">{{item.elapsed}}</div>
                        </li>
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div style="margin-left:-10px">{{ index + 1 }}</div>
                            <div style="margin-left:47px">{{item.username}}</div>
                            <div style="margin-left:185px">{{item.io_score}}</div>
                            <div style="margin-left:100px">{{item.elapsed}}</div>
                        </li>
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div style="margin-left:-10px">{{ index + 1 }}</div>
                            <div style="margin-left:47px">{{item.username}}</div>
                            <div style="margin-left:185px">{{item.io_score}}</div>
                            <div style="margin-left:100px">{{item.elapsed}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'MyScore',
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
            img{
                margin-left: 110px;
            }
        }
    }
    .welcome{
        width:80%;height:100px;position:absolute;top:10%;left:50%;transform: translate(-50%,-10%);
        background:url('../io/images/myscore1.png') no-repeat center center;
        background-size:100%;
    }
    .rankList{
        margin-left: 10px;
        div{
            display: flex;
            justify-content: center;
            width:200px;
            margin-left: -60px;
            // &:first-child{
                // margin-right: -5px;
            // }
        }
    }
</style>