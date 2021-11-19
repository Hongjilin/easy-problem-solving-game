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
        <!-- <img src="./images/up.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt="">
        <img src="../thread/images/home4.png" style="width:150px;float:right;margin-top:10px;margin-right:70px" alt=""> -->
        <div>
            <div style="position:absolute;top:62px;left:70%">{{elapsed}}秒</div><br>
            <div style="position:absolute;top:83px;left:70%">{{score1+score2+score3+score4+score5+score6+score7+score8+score9+score10}}分</div>
            <img src="../thread/images/answer1.png" style="width:300px;float:right;margin-top:10px;margin-right:290px" alt="">
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
                <div class="yes" v-if="isShow">
                    <img v-if="!check" src="./images/no1.png" style="width:150px;position:absolute;top:25%;left:50%;transform: translate(-50%,-50%);" alt="">
                    <div v-if="!check" style="position:absolute;top:40%;left:51%;transform: translate(-50%,0%);color:red">回答错误！</div>
                    <img v-if="check" src="./images/yes1.png" style="width:150px;position:absolute;top:45%;left:50%;transform: translate(-50%,-50%);" alt="">
                    <div v-if="check" style="position:absolute;top:60%;left:51%;transform: translate(-50%,0%);color:green">恭喜你，回答正确！</div>
                    <div v-if="!check" style="position:absolute;top:55%;left:50%;transform: translate(-50%,0%);font-size:20px">{{tip}}</div>
                    <img v-if="!check" @click="pass" style="position:absolute;top:70%;left:50%;transform: translate(-50%,0%);width:150px" src="../thread/images/yes.png" alt="">
                </div>
                <div style="color:white;font-size:24px">
                    <img style="width:180px;margin-left:-20px" src="../thread/images/answer4.png" alt="">
                </div>
                <div style="margin-top:40px" v-if="type == 3">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="">
                    <div style="position:absolute;">
                        <input @input="typeOne" type="text" @blur="checkOne('线程需要继承Thread')" v-model="type1" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px" v-if="type == 4">
                    <img style="width:160px;margin-left:-18px;height:66px" class="answerImg" src="../thread/images/answer7.png" alt="">
                    <div style="position:absolute;">
                        <input @input="typeTwo" @blur="checkTwo('使用synchronized设置同步代码块')" placeholder="第1空" v-model="type2" type="text" style="width:109px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:145px" v-if="type == 4">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="" >
                    <div style="position:absolute;">
                        <input @input="typeThree" @blur="checkThree('设置没有存货标记')" placeholder="第2空" v-model="type3" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:280px" v-if="type == 4">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="" >
                    <div style="position:absolute;">
                        <input @input="typeFour" @blur="checkFour('唤醒线程')" placeholder="第3空" v-model="type4" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:90px;" v-if="type == 4">
                    <img style="width:160px;margin-left:-18px;height:66px" class="answerImg" src="../thread/images/answer7.png" alt="" >
                    <div style="position:absolute;">
                        <input @input="typeFive" @blur="checkFive('线程等待')" placeholder="第4空" v-model="type5" type="text" style="width:109px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px" v-if="type == 5">
                    <img style="width:150px;margin-left:-18px;height:66px" class="answerImg" src="../thread/images/answer7.png" alt="" >
                    <div style="position:absolute;">
                        <input @input="typeSix" @blur="checkSix('线程需要继承Thread')" placeholder="第1空" v-model="type6" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:140px" v-if="type == 5">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="" >
                    <div style="position:absolute;">
                        <input @input="typeSeven" @blur="checkSeven('设置有存货标记')" placeholder="第2空" v-model="type7" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:280px" v-if="type == 5">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="" >
                    <div style="position:absolute;">
                        <input @input="typeEight" @blur="checkEight('设置没有存货标记')" placeholder="第3空" v-model="type8" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:90px;" v-if="type == 5">
                    <img style="width:150px;margin-left:-18px;height:66px" class="answerImg" src="../thread/images/answer7.png" alt="" >
                    <div style="position:absolute;">
                        <input @input="typeNine" @blur="checkNine('唤醒线程')" placeholder="第4空" v-model="type9" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <div style="margin-top:90px;margin-left:140px" v-if="type == 5">
                    <img style="width:150px;margin-left:-18px" class="answerImg" src="../thread/images/answer7.png" alt="" >
                    <div style="position:absolute;">
                        <input @input="typeTen" @blur="checkTen('线程等待')" placeholder="第5空" v-model="type10" type="text" style="width:99px;height:28px;font-size:18px;margin-top:15px">
                    </div>
                </div>
                <img style="width:120px;margin-left:100px;margin-top:20px" class="answerAction" src="../thread/images/answer8.png" alt="" @click="up">
                <img style="width:130px;margin-left:213px;margin-top:20px" class="answerAction" src="../thread/images/answer9.png" alt="" @click="next">
                <img style="width:110px;margin-left:340px;margin-top:28px" class="answerAction" src="../thread/images/submit.png" alt="" @click="submit">
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
        isShow: false,
        tip: '',
        check: false,
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: false,
        check10: false,
        stop: false,
        userInfo:[]
    }
  },
  mounted() {
        this.timer();
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    },
  methods:{
      timer() {
            let time = setInterval(()=>{
                if (this.stop) {
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
            // if (this.type == 5) {
            //     // clearInterval(time)
            //     this.submit()
            // }
        },
        typeOne() {
            if (this.type1.trim() == 'Thread') {
                this.score1 = 10
                this.check1 = true
            } else {
                this.score1 = 0
                this.check1 = false
            }
        },
        typeTwo() {
            if (this.type2.trim() == 'synchronized') {
                this.score2 = 10
                this.check2 = true
            } else {
                this.score2 = 0
                this.check2 = false
            }
        },
        typeThree() {
            if (this.type3.trim() == 'false') {
                this.score3 = 10
                this.check3 = true
            } else {
                this.score3 = 0
                this.check3 = false
            }
        },
        typeFour() {
            if (this.type4.trim() == 'notify()') {
                this.score4 = 10
                this.check4 = true
            } else {
                this.score4 = 0
                this.check4 = false
            }
        },
        typeFive() {
            if (this.type5.trim() == 'wait()') {
                this.score5 = 10
                this.check5 = true
            } else {
                this.score5 = 0
                this.check5 = false
            }
        },
        typeSix() {
            if (this.type6.trim() == 'Thread') {
                this.score6 = 10
                this.check6 = true
            } else {
                this.score6 = 0
                this.check6 = false
            }
        },
        typeSeven() {
            if (this.type7.trim() == 'true') {
                this.score7 = 10
                this.check7 = true
            } else {
                this.score7 = 0
                this.check7 = false
            }
        },
        typeEight() {
            if (this.type8.trim() == 'false') {
                this.score8 = 10
                this.check8 = true
            } else {
                this.score8 = 0
                this.check8 = false
            }
        },
        typeNine() {
            if (this.type9.trim() == 'notify()') {
                this.score9 = 10
                this.check9 = true
            } else {
                this.score9 = 0
                this.check9 = false
            }
        },
        typeTen() {
            if (this.type10.trim() == 'Wait()') {
                this.score10 = 5
                this.check10 = true
            } else {
                this.score10 = 0
                this.check10 = false
            }
        },
        checkOne(msg) {
            if(this.check1 == false) {
                this.isShow = true
                this.tip = msg
                this.check = false
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
            }
        },
        checkTwo(msg) {
            if(this.check2 == false) {
                this.isShow = true
                this.tip = msg
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
            }
        },
        checkThree(msg) {
            if(this.check3 == false) {
                this.isShow = true
                this.tip = msg
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
            }
        },
        checkFour(msg) {
            if(this.check4 == false) {
                this.isShow = true
                this.tip = msg
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
            }
        },
        checkFive(msg) {
            if(this.check5 == false) {
                this.isShow = true
                this.tip = msg
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
            }
        },
        checkSix(msg) {
            if(this.check6 == false) {
                this.isShow = true
                this.tip = msg
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
            }
        },
        checkSeven(msg) {
            if(this.check7 == false) {
                this.isShow = true
                this.tip = msg
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
            }
        },
        checkEight(msg) {
            if(this.check8 == false) {
                this.isShow = true
                this.tip = msg
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
            }
        },
        checkNine(msg) {
            if(this.check9 == false) {
                this.isShow = true
                this.tip = msg
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
            }
        },
        checkTen(msg) {
            if(this.check10 == false) {
                this.isShow = true
                this.tip = msg
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
            }
        },
        pass() {
            this.isShow = false
        },
        async submit(){
            this.stop = true
            // return console.log(this.score1+this.score2+this.score3+this.score4+this.score5+this.score6+this.score7+this.score8+this.score9+this.score10)
            const res =  await this.$Http.post('/scorecard/setThreadScorecard',{
                uid:this.userInfo.uid,
                username: this.userInfo.username,
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
                if (res.code == 200) {
                    this.open('提交成功')
                }
        },
        open(v) {
            this.$message({
                message:v,
                type: 'success'
            });
            setTimeout(()=>{
                this.$router.push({path: '/thresult', query: {elapsed:this.elapsed,score:this.score1+this.score2+this.score3+this.score4+this.score5+this.score6+this.score7+this.score8+this.score9+this.score10}})
            },2000)
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
        .yes{
            position:absolute;font-size:24px;width:500px;height:500px;z-index: 9999;color: white;
            margin-top: -300px;margin-left: -320px;
            background: url('./images/yes2.png') no-repeat center center;
            background-size:100%;
        }
    }
    .hometap{
        width:1200px;height:100px;position:absolute;top:10%;left:50%;transform: translate(-50%,-50%);
    }
</style>