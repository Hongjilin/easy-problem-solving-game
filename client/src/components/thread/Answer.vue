<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <div class="hometap">
            <img src="../thread/images/answer2.png" style="width:100px" alt="">
            <img src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-11px" alt="">
            <img src="../thread/images/answer2.png" style="width:100px;margin-left:-11px" alt="" v-if="type >= 2">
            <img v-if="type >= 2" src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-11px" alt="">
            <img src="../thread/images/answer3.png" style="width:106px;margin-left:-7px;" alt="" v-if="type < 2">
            <img src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-18px" alt="" v-if="type < 2">
            <img src="../thread/images/answer2.png" style="width:100px;margin-left:-11px" alt="" v-if="type >= 3">
            <img v-if="type >= 3" src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-11px" alt="">
            <img src="../thread/images/answer3.png" style="width:106px;margin-left:-14px;" alt="" v-if="type < 3">
            <img src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-18px" alt="" v-if="type < 3">
            <img src="../thread/images/answer2.png" style="width:100px;margin-left:-11px" alt="" v-if="type >= 4">
            <img v-if="type >= 4" src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-11px" alt="">
            <img src="../thread/images/answer3.png" style="width:106px;margin-left:-14px;" alt="" v-if="type < 4">
            <img src="./images/answer11.png" style="width:20px;height:20px;position:absolute;margin-top:40px;margin-left:-18px" alt="" v-if="type < 4">
            <img src="../thread/images/answer2.png" style="width:100px;margin-left:-11px" alt="" v-if="type == 5">
            <img src="../thread/images/answer3.png" style="width:106px;margin-left:-14px;" alt="" v-if="type < 5">
        </div>
        <img src="../thread/images/home4.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt="">
        <div>
            <div style="position:absolute;top:62px;left:70%">{{elapsed}}秒</div><br>
            <div style="position:absolute;top:83px;left:70%">{{score1+score2+score3+score4+score5+score6+score7+score8+score9+score10}}分</div>
            <img src="../thread/images/answer1.png" style="width:300px;float:right;margin-top:10px;margin-right:70px" alt="">
        </div>

        <div class="background1">
            <div class="around" style="position:absolute;font-size:20px;overflow:hidden;">
                <div style="width:100%;margin-left:40px;height:375px;margin-top:75px;overflow-y:scroll;overflow-x:hidden;">
                    <img v-if="type == 1" src="./images/th1.png" style="width:92%;" alt="">
                    <img v-if="type == 2" src="./images/th2.png" style="width:92%;" alt="">
                    <img v-if="type == 3" src="./images/th3.png" style="width:92%;" alt="">
                    <img v-if="type == 4" src="./images/th4.png" style="width:92%;" alt="">
                    <img v-if="type == 5" src="./images/th5.png" style="width:92%;" alt="">
                    <img v-if="type == 5" src="./images/th6.png" style="width:92%;margin-top:-10px" alt="">
                </div>
            </div>
            <div class="around1">
                <div style="color:white;font-size:24px">
                    <img style="width:180px;margin-left:-20px" src="../thread/images/answer4.png" alt="">
                </div>
                <div style="margin-top:40px" v-if="type == 3">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login1">
                    <div style="position:absolute;">
                        <input @input="typeOne" type="text" v-model="type1" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px" v-if="type == 4">
                    <img style="width:160px;margin-left:-18px;height:66px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login1">
                    <div style="position:absolute;">
                        <input @input="typeTwo" placeholder="第1空" v-model="type2" type="text" style="width:109px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:145px" v-if="type == 4">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login1">
                    <div style="position:absolute;">
                        <input @input="typeThree" placeholder="第2空" v-model="type3" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:280px" v-if="type == 4">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login1">
                    <div style="position:absolute;">
                        <input @input="typeFour" placeholder="第3空" v-model="type4" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:90px;" v-if="type == 4">
                    <img style="width:160px;margin-left:-18px;height:66px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login1">
                    <div style="position:absolute;">
                        <input @input="typeFive" placeholder="第4空" v-model="type5" type="text" style="width:109px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px" v-if="type == 5">
                    <img style="width:150px;margin-left:-18px;height:66px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login1">
                    <div style="position:absolute;">
                        <input @input="typeSix" placeholder="第1空" v-model="type6" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:140px" v-if="type == 5">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login1">
                    <div style="position:absolute;">
                        <input @input="typeSeven" placeholder="第2空" v-model="type7" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:280px" v-if="type == 5">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login1">
                    <div style="position:absolute;">
                        <input @input="typeEight" placeholder="第3空" v-model="type8" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:90px;" v-if="type == 5">
                    <img style="width:150px;margin-left:-18px;height:66px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login1">
                    <div style="position:absolute;">
                        <input @input="typeNine" placeholder="第4空" v-model="type9" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:90px;margin-left:140px" v-if="type == 5">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="" @click="login1">
                    <div style="position:absolute;">
                        <input @input="typeTen" placeholder="第5空" v-model="type10" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <img style="width:120px;margin-left:200px;margin-top:20px" class="answerAction" src="../thread/images/answer8.png" alt="" @click="up">
                <img style="width:130px;margin-left:309px;margin-top:20px" class="answerAction" src="../thread/images/answer9.png" alt="" @click="next">
                <!-- <img style="width:130px;margin-left:320px;margin-top:-2px" class="answerAction" src="../thread/images/answer10.png" alt="" @click="login"> -->
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'Answerth',
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
        type: 1,
        elapsed: 0,
        type1: '',
        type2:'',
        type3:'',
        type4:'',
        type5:'',
        type6:'',
        type7:'',
        type8:'',
        type9:'',
        type10:'',
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
        typeOne() {
            if (this.type1.trim() == 'Thread') {
                this.score1 = 10
            } else {
                this.score1 = 0
            }
        },
        typeTwo() {
            if (this.type2.trim() == 'synchronized') {
                this.score2 = 10
            } else {
                this.score2 = 0
            }
        },
        typeThree() {
            if (this.type3.trim() == 'false') {
                this.score3 = 10
            } else {
                this.score3 = 0
            }
        },
        typeFour() {
            if (this.type4.trim() == 'notify()') {
                this.score4 = 10
            } else {
                this.score4 = 0
            }
        },
        typeFive() {
            if (this.type5.trim() == 'wait()') {
                this.score5 = 10
            } else {
                this.score5 = 0
            }
        },
        typeSix() {
            if (this.type6.trim() == 'Thread') {
                this.score6 = 10
            } else {
                this.score6 = 0
            }
        },
        typeSeven() {
            if (this.type7.trim() == 'true') {
                this.score7 = 10
            } else {
                this.score7 = 0
            }
        },
        typeEight() {
            if (this.type8.trim() == 'false') {
                this.score8 = 10
            } else {
                this.score8 = 0
            }
        },
        typeNine() {
            if (this.type9.trim() == 'notify()') {
                this.score9 = 10
            } else {
                this.score9 = 0
            }
        },
        typeTen() {
            if (this.type10.trim() == 'Wait()') {
                this.score10 = 5
            } else {
                this.score10 = 0
            }
        },
        async submit(){
            const res =  await this.$Http.post('/scorecard/setThreadScorecard',{
                uid:1701130050,
                username: '读书',
                thread_score: this.score1+this.score2+this.score3+this.score4+this.score5+this.score6+this.score7+this.score8+this.score9+this.score10,
                elapsed: this.elapsed,
                points: {
                    thread: this.score1+this.score6,
                    async: this.score2,
                    judgment: this.score3+this.score7+this.score8,
                    change_state: this.score4+this.score5+this.score9+this.score10,
                    scoring_details: `${[this.score1,this.score2,this.score3,this.score4,this.score5,this.score6,this.score7,this.score8,this.score9,this.score10]}`
                }
                })
                console.log(res,'resresres')
                // if (res.code == 200) {
                //     this.$router.push('/home')
                // }
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
        width:1200px;height:600px;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);
        .around{
            width:57%;height:500px;position:absolute;top:25%;left:20%;transform: translate(-50%,0%);
            background: url('../thread/images/answer5.png') no-repeat center center;
            background-size:100%;
        }
        .around1{
            width:55%;height:500px;position:absolute;top:25%;left:60%;transform: translate(-20%,0%);
            background: url('../thread/images/answer6.png') no-repeat center center;
            background-size:100%;
            div{
                position:absolute;top:45%;left:15%;
            }
            .answerImg{
                position:absolute;top:55%;left:13%;
            }
            .answerAction{
                position:absolute;top:68%;left:25%;
            }
        }
    }
    .hometap{
        width:1200px;height:100px;position:absolute;top:10%;left:50%;transform: translate(-50%,-50%);
    }
</style>