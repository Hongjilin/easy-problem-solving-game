<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <div class="hometap">
            <img src="../io/images/answer1.png" style="width:1200px" alt="">
            <img src="../io/images/answer2.png" style="width:130px;margin-left:260px" alt="">
            <img src="../io/images/answer16.png" style="position:absolute;width:100px;margin-top:-27px;margin-left:-115px" alt="">
            <img src="../io/images/answer12.png" style="width:128px;margin-left:-20px" alt="">
            <img src="../io/images/answer16.png" style="position:absolute;width:100px;margin-top:-27px;margin-left:-111px" alt="">
            <img src="../io/images/answer13.png" style="width:140px;margin-left:-20px" alt="">
            <img src="../io/images/answer16.png" style="position:absolute;width:100px;margin-top:-27px;margin-left:-116px" alt="">
            <img src="../io/images/answer14.png" style="width:131px;margin-left:-20px" alt="">
            <img src="../io/images/answer16.png" style="position:absolute;width:100px;margin-top:-27px;margin-left:-114px" alt="">
            <img src="../io/images/answer15.png" style="width:130px;margin-left:-20px" alt="">
            <img src="../io/images/answer16.png" style="position:absolute;width:100px;margin-top:-27px;margin-left:-115px" alt="">
            <img src="../io/images/answer6.png" style="width:131px;margin-left:-20px" alt="">
            <img src="../io/images/answer16.png" style="position:absolute;width:100px;margin-top:-27px;margin-left:-112px" alt="">
            <img src="../io/images/answer3.png" style="width:1200px" alt="">
            <div style="position:absolute;top:140%;margin-left:30%">答题时间：{{elapsed}}秒</div>
            <div style="position:absolute;top:140%;margin-left:56%">当前得分：{{score1+score2+score3+score4+score5+score6+score7+score8+score9+score10+score11}}分</div>
        </div>

        <img src="../io/images/home5.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt="">

        <div class="background1">
            <div class="around">
                <div style="position:absolute;margin-top:30px;margin-left:80px" v-if="type==1">
                    <img src="./images/io1.png" style="width:100%" alt="">
                    <img src="./images/io2.png" style="width:51%" alt="">
                    <img src="./images/io3.png" style="width:49%" alt="">
                    <img src="./images/io4.png" style="width:100%" alt="">
                </div>
                <div style="position:absolute;margin-top:30px;margin-left:80px" v-if="type==2">
                    <img src="./images/io2.1.png" style="width:97%" alt="">
                </div>
                <div style="position:absolute;margin-top:30px;margin-left:80px" v-if="type==3">
                    <img src="./images/io3.1.png" style="width:97%" alt="">
                </div>
                <div style="position:absolute;margin-top:30px;margin-left:80px" v-if="type==4">
                    <img src="./images/io4.1.png" style="width:97%" alt="">
                </div>
                <div style="position:absolute;margin-top:30px;margin-left:80px" v-if="type==5">
                    <img src="./images/io5.1.png" style="width:97%" alt="">
                </div>
            </div>
            <div class="around1">
                <div style="color:white;font-size:24px">请输入答案：</div>
                <div style="margin-top:40px" v-if="type==1">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeOne" style="width:100px;height:32px;font-size:18px" type="text" v-model="type1">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:-10px" v-if="type == 2">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeTwo" placeholder="第1空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type2_1">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:110px" v-if="type == 2">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeThree" placeholder="第2空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type2_2">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:230px" v-if="type == 2">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeFour" placeholder="第3空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type2_3">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:350px" v-if="type == 2">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeFive" placeholder="第4空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type2_4">
                    </div>
                </div>
                <div style="margin-top:90px;margin-left:-10px" v-if="type == 2">
                    <img style="width:405px;height:50px;margin-top:0px;margin-left:-30px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeSix" placeholder="第5空" style="width:290px;height:32px;font-size:18px" type="text" v-model="type2_5">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:-10px" v-if="type == 3">
                    <img style="width:205px;height:50px;margin-left:-6px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeSeven" placeholder="第1空" style="width:140px;height:32px;font-size:18px" type="text" v-model="type3_1">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:170px" v-if="type == 3">
                    <img style="width:242px;height:50px;margin-left:-9px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeEight" placeholder="第2空" style="width:170px;height:32px;font-size:18px" type="text" v-model="type3_2">
                    </div>
                </div>
                <div style="margin-top:40px" v-if="type==4">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeNine" style="width:100px;height:32px;font-size:18px" type="text" v-model="type4">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:-10px" v-if="type == 5">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeTen" placeholder="第1空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type5_1">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:110px" v-if="type == 5">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeEleven" placeholder="第2空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type5_2">
                    </div>
                </div>
                <img style="width:95px;margin-left:250px" class="answerAction" src="../io/images/answer10.png" alt="" @click="up">
                <img style="width:108px;margin-left:350px" class="answerAction" src="../io/images/answer9.png" alt="" @click="next">
                <!-- <img style="width:100px;margin-left:320px" class="answerAction" src="../io/images/answer11.png" alt=""> -->
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'Answer',
    data() {
        return {
            score1: 0,
            score2: 0,
            score3: 0,
            score4: 0,
            score5: 0,
            score6: 0,
            score7: 0,
            score8: 0,
            score9: 0,
            score10: 0,
            score11: 0,
            type: 1,
            type1: '',
            type2_1:'',
            type2_2:'',
            type2_3:'',
            type2_4:'',
            type2_5:'',
            type3_1:'',
            type3_2:'',
            type4:'',
            type5_1:'',
            type5_2:'',
            elapsed:0,
        }
    },
    mounted:function(){
        this.timer();
    },
    methods:{
        timer() {
            let time = setInterval(()=>{
                if (this.type == 5) {
                    clearInterval(time)
                }
                this.elapsed = this.elapsed + 1
            },1000)
        },
        typeOne() {
            if (this.type1.trim() == 'Serializable') {
                this.score1 = 10
            } else {
                this.score1 = 0
            }
        },
        typeTwo() {
            if (this.type2_1.trim() == 'Student1[]') {
                this.score2 = 10
            } else {
                this.score2 = 0
            }
        },
        typeThree() {
            if (this.type2_2.trim() == 's.nextInt()') {
                this.score3 = 10
            } else {
                this.score3 = 0
            }
        },
        typeFour() {
            if (this.type2_3.trim() == 's.nextInt()') {
                this.score4 = 10
            } else {
                this.score4 = 0
            }
        },
        typeFive() {
            if (this.type2_4.trim() == 's.nextInt()') {
                this.score5 = 10
            } else {
                this.score5 = 0
            }
        },
        typeSix() {
            if (this.type2_5.trim() == 'stu[i].getScore1()+stu[i].getScore2()') {
                this.score6 = 10
            } else {
                this.score6 = 0
            }
        },
        typeSeven() {
            if (this.type3_1.trim() == 'FileOutputStream') {
                this.score7 = 10
            } else {
                this.score7 = 0
            }
        },
        typeEight() {
            if (this.type3_2.trim() == 'ObjectOutputStream') {
                this.score8 = 10
            } else {
                this.score8 = 0
            }
        },
        typeNine() {
            if (this.type4.trim() == 'writeObject') {
                this.score9 = 10
            } else {
                this.score9 = 0
            }
        },
        typeTen() {
            if (this.type5_1.trim() == 'readObject') {
                this.score10 = 5
            } else {
                this.score10 = 0
            }
        },
        typeEleven() {
            if (this.type5_2.trim() == 'Serializable') {
                this.score11 = 5
            } else {
                this.score11 = 0
            }
        },
        up() {
            if (this.type > 1) {
                this.type = this.type - 1
            }
        },
        next() {
            if (this.type < 5) {
                this.type = this.type + 1
            }
            if (this.type == 5) {
                // clearInterval(time)
                // this.submit()
            }
        },
        async submit(){
            const res =  await this.$Http.post('/scorecard/setIOScorecard',{
                uid:1701130050,
                username: '读书',
                io_score: this.score1+this.score2+this.score3+this.score4+this.score5+this.score6+this.score7+this.score8+this.score9+this.score10+this.score11,
                elapsed: this.elapsed,
                points: {
                    array: this.score1,
                    keyboard: this.score2+this.score3+this.score4,
                    methodcall: this.score5,
                    io_stream: this.score6+this.score7,
                    rw_object: this.score8+this.score10+this.score11,
                    conversion: this.score9,
                    scoring_details: `${[this.score1,this.score2,this.score3,this.score4,this.score5,this.score6,this.score7,this.score8,this.score9,(this.score10+this.score11)]}`
                }
                })
                console.log(res,'resresres')
                // if (res.code == 200) {
                //     this.$router.push('/home')
                // }
        },
        // async login(){
        //     const res =  await this.$Http.post('/scorecard/setThreadScorecard',{
        //         uid:1701130050,
        //         username: '读书',
        //         io_score: 60,
        //         elapsed: 100,
        //         points: {
        //             thread: 10,
        //             async: 10,
        //             judgment: 10,
        //             change_state: 10,
        //             scoring_details: '[10,10,10,10,10,10,10,10,10,10]'
        //         }
        //         })
        //         console.log(res,'resresres')
        //         // if (res.code == 200) {
        //         //     this.$router.push('/home')
        //         // }
        // },

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
        background: url('../io/images/login6.png') no-repeat center center;
        // background-size:100%;
    }
    .background1{
        width:1200px;height:600px;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);
        .around{
            width:50%;height:500px;position:absolute;top:25%;left:20%;transform: translate(-50%,0%);
            background: url('../io/images/answer4.png') no-repeat center center;
            background-size:100%;
        }
        .around1{
            width:60%;height:500px;position:absolute;top:25%;left:56%;transform: translate(-20%,0%);
            background: url('../io/images/answer5.png') no-repeat center center;
            background-size:100%;
            div{
                position:absolute;top:45%;left:15%;
            }
            .answerImg{
                position:absolute;
                // top:55%;left:13%;
            }
            .answerAction{
                position:absolute;top:68%;left:25%;
            }
        }
    }
    .hometap{
        width:1200px;height:100px;position:absolute;top:10%;left:50%;transform: translate(-50%,-50%);
        div{
            font-size: 22px;
            font-weight: bold;
        }
    }
</style>