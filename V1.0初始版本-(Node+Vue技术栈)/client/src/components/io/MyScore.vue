<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <img src="../io/images/up.png" style="width:150px;float:right;margin-top:20px;margin-right:70px;cursor: pointer;" alt="" @click="up">
        <div class="welcome"></div>
        <div class="background1">
            <div class="around">
                <img style="width:1000px" src="../io/images/myscore4.png" alt="">
                <div style="color:white;width:100%;position:absolute;margin-top:0px;font-size:20px;overflow:hidden;">
                    <ul style="list-style:none;overflow:scroll;width:1200px;height:450px;overflow-y:scroll;overflow-x:hidden;">
                        <li class="rankList" style="margin-bottom:30px;display:flex" v-for="(item, index) in list" :key="index">
                            <div style="margin-left:-10px">{{ index + 1 }}</div>
                            <div style="margin-left:47px">{{item.elapsed?item.elapsed: 0}}</div>
                            <div style="margin-left:185px">{{item.io_score?item.io_score:0}}</div>
                            <div style="margin-left:100px">{{(myIoNo < 101&&myIoNo)? myIoNo: '100+'}}</div>
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
            list: [],
            myIoNo: '',
            userInfo: []
        }
    },
    mounted() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (!userInfo) {
            this.$router.push('/login')
        }
        this.userInfo = userInfo
        this.resRankList()
        this.getUserInfo()
    },
    methods:{
        up(){
            this.$router.go(-1)
        },
        async getUserInfo(){
            const res = await this.$Http.get('/users/getUserInfo',{
                params:{
                    uid: this.userInfo.uid
                }
            })
            if (res.code == 200) {
                this.list = res.data
            }
            console.log(res.data,"resresresres")
        },
        async resRankList(){
            const res = await this.$Http.get('/scorecard/rankingList',{
                params:{
                    number:100,
                    type:'io_score'
                }
            })
            if (res.data.code == 200) {
                const {data} = res?.data
                data?.map((item,index)=>{
                    if(item.uid == this.userInfo.uid) this.myIoNo=index+1
                })

                // for (let i = 0;i<res.data.data.length;i++) {
                //     if (res.data.data[i] == '1701130050') {
                //         this.list.
                //     }
                // }
            }
        }
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