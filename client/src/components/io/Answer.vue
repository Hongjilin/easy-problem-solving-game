<template>

    <div style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" class="background">
        <BgMusic />
         <audio preload="auto" loop id="success" :src="require('@/assets/audio/yes1.mp3')"></audio>
         <audio preload="auto" loop id="no" :src="require('@/assets/audio/no.mp3')"></audio>
        <div class="hometap">
            <img src="../io/images/answer1.png" style="width:1200px" alt="">
            <img src="../io/images/answer2.png" style="width:130px;margin-left:320px" alt="">
            <img src="../io/images/answer16.png" v-if="type >= 1" style="position:absolute;width:100px;margin-top:-27px;margin-left:-115px" alt="">
            <img src="../io/images/answer12.png" style="width:128px;margin-left:-20px" alt="">
            <img src="../io/images/answer16.png" v-if="type >= 2" style="position:absolute;width:100px;margin-top:-27px;margin-left:-111px" alt="">
            <img src="../io/images/answer13.png" style="width:140px;margin-left:-20px" alt="">
            <img src="../io/images/answer16.png" v-if="type >= 3" style="position:absolute;width:100px;margin-top:-27px;margin-left:-116px" alt="">
            <img src="../io/images/answer14.png" style="width:131px;margin-left:-20px" alt="">
            <img src="../io/images/answer16.png" v-if="type >= 4" style="position:absolute;width:100px;margin-top:-27px;margin-left:-114px" alt="">
            <img src="../io/images/answer15.png" style="width:130px;margin-left:-20px" alt="">
            <img src="../io/images/answer16.png" v-if="type >= 5" style="position:absolute;width:100px;margin-top:-27px;margin-left:-115px" alt="">
            <!-- <img src="../io/images/answer6.png" style="width:131px;margin-left:-20px" alt="">
            <img src="../io/images/answer16.png" v-if="type > 4" style="position:absolute;width:100px;margin-top:-27px;margin-left:-112px" alt=""> -->
            <img src="../io/images/answer3.png" style="width:1200px" alt="">
            <div style="position:absolute;top:140%;margin-left:30%">答题时间：{{elapsed}}秒</div>
            <div style="position:absolute;top:140%;margin-left:56%">当前得分：{{score1+score2+score3+score4+score5+score6+score7+score8+score9+score10+score11}}分</div>
        </div>

        <div class="go-back">
            <div :class="isShowImg?'shadow':''" />
            <!-- <img class="img1" @mouseover="mouseOver" @mouseleave="mouseOver" src="../io/images/home5.png" @click="out" alt="" /> -->
            <img src="../io/images/tuichudati.png" class="img1" @mouseover="mouseOver" @mouseleave="mouseOver" @click="out" alt="">
        </div>


        <div class="background1">
            <div class="around" style="position:absolute;font-size:20px;overflow:hidden;">
                <div style="width:100%;margin-left:40px;height:395px;margin-top:35px;overflow-y:scroll;overflow-x:hidden;">
                    <img v-if="type == 1" src="./images/io1.png" style="width:85%;margin-left:45px" alt="">
                    <img v-if="type == 1" src="./images/io2.png" style="width:85%;margin-left:45px;margin-top:-10px" alt="">
                    <img v-if="type == 2" src="./images/io3.png" style="width:85%;margin-left:45px" alt="">
                    <img v-if="type == 3" src="./images/io4.png" style="width:85%;margin-left:45px" alt="">
                    <img v-if="type == 4" src="./images/io5.png" style="width:85%;margin-left:45px" alt="">
                    <img v-if="type == 5" src="./images/io6.png" style="width:85%;margin-left:45px" alt="">
                </div>
            </div>
            <div class="around1">
                <div class="yes" v-if="isShow">
                    <img v-if="!check" src="./images/no.png" style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" alt="">
                    <!-- <div v-if="!check" style="position:absolute;top:40%;left:51%;transform: translate(-50%,0%);color:red">回答错误！</div> -->
                    <img v-if="check" src="./images/yes.png" style="width:100%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);" alt="">
                    <!-- <div v-if="check" style="position:absolute;top:60%;left:51%;transform: translate(-50%,0%);color:green">恭喜你，回答正确！</div> -->
                    <div v-if="!check" style="position:absolute;top:62%;left:50%;transform: translate(-50%,0%);font-size:18px">{{tip}}</div>
                    <img v-if="!check" @click="pass" style="position:absolute;top:78%;left:50%;transform: translate(-50%,0%);width:150px" src="../io/images/pass.png" alt="">
                </div>
                <div style="margin-top:-150px">
                    <img src="./images/yes1.png" width="220px" alt="" v-if="type==1 && yes1">
                    <img src="./images/yes2.png" width="360px" alt="" v-if="type==2 && yes2">
                </div>
                <div style="color:white;font-size:24px">请输入答案：</div>
                <div style="margin-top:40px" v-if="type==1">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeOne" @blur="checkOne('对象需要实现Serializable接口才能进行序列化和反序列化。')" placeholder="第一空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type1">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:-10px" v-if="type == 2">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeTwo" @blur="checkTwo('')" placeholder="第一空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type2_1">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:110px" v-if="type == 2">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeThree" @blur="checkThree('')" placeholder="第二空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type2_2">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:230px" v-if="type == 2">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeFour" @blur="checkFour('')" placeholder="第三空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type2_3">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:350px" v-if="type == 2">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeFive" @blur="checkFive('')" placeholder="第四空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type2_4">
                    </div>
                </div>
                <div style="margin-top:90px;margin-left:-10px" v-if="type == 2">
                    <img style="width:405px;height:50px;margin-top:0px;margin-left:-30px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeSix" @blur="checkSix('总分应为2门科目的成绩之和，可以通过getScore*方法获取单科成绩')" placeholder="第五空" style="width:290px;height:32px;font-size:18px" type="text" v-model="type2_5">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:-10px" v-if="type == 3">
                    <img style="width:205px;height:50px;margin-left:-6px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeSeven" @blur="checkSeven('生成一个文件输出字节流')" placeholder="第一空" style="width:140px;height:32px;font-size:18px" type="text" v-model="type3_1">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:170px" v-if="type == 3">
                    <img style="width:242px;height:50px;margin-left:-9px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeEight" @blur="checkEight('生成一个对象输出流')" placeholder="第二空" style="width:170px;height:32px;font-size:18px" type="text" v-model="type3_2">
                    </div>
                </div>
                <div style="margin-top:40px" v-if="type==4">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeNine" @blur="checkNine('请输入正确的写对象方法')" placeholder="第一空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type4">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:-10px" v-if="type == 5">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeTen" @blur="checkTen('要将Object对象转成Student1对象。')" placeholder="第一空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type5_1">
                    </div>
                </div>
                <div style="margin-top:40px;margin-left:110px" v-if="type == 5">
                    <img style="width:150px" class="answerImg" src="../io/images/answer7.png" alt="">
                    <div style="position:absolute;margin-top:5px;margin-left:20px">
                        <input @input="typeEleven" @blur="checkEleven('请输入正确的读对象方法')" placeholder="第二空" style="width:100px;height:32px;font-size:18px" type="text" v-model="type5_2">
                    </div>
                </div>
                <img v-if="type != 1" class="answerAction answerAction1" src="../io/images/answer10.png" alt="" @click="up">
                <img v-if="type != 5" class="answerAction answerAction2" src="../io/images/answer9.png" alt="" @click="next">
                <img v-if="type == 5" class="answerAction answerAction3" src="../io/images/submit.png" alt="" @click="submit">
            </div>
        </div>
    </div>

</template>
<script>
import BgMusic from '../common/bg-music.vue'
export default {
    name:'Answer',
    components:{BgMusic},
    data() {
        return {
            isShowImg: false,
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
            stop: false,
            userInfo:[],
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
            check11: false,
            yes1: false,
            yes2: false,
            list: [],
            isOff: false,
            isOff1:false
        }
    },
    mounted() {
        this.timer();
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (!userInfo) {
            this.$router.push('/login')
        }
        this.userInfo = userInfo
        this.getUserInfo()
    },
    methods:{
        mouseOver() {
            this.isShowImg = !this.isShowImg
        },
        out() {
            this.$router.push('/home')
        },
        changeSeccessOn(){
            let oAudio = document.querySelector("#success");
            if(this.isOff){
            oAudio.play();//让音频文件开始播放     
            }else{
            oAudio.load();//让音频文件暂停播放 
            }
        //    this.isOff = !this.isOff;
        },
        changeNoOn(){
            let oAudio = document.querySelector("#no");
            if(this.isOff1){
            oAudio.play();//让音频文件开始播放     
            }else{
            oAudio.load();//让音频文件暂停播放 
            }
        //    this.isOff = !this.isOff;
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
        timer() {
            let time = setInterval(()=>{
                if (this.stop == true) {
                    clearInterval(time)
                }
                this.elapsed = this.elapsed + 1
            },1000)
        },
        typeOne() {
            if (this.type1.trim() == 'Serializable') {
                this.score1 = 10
                this.check1 = true
            } else {
                this.score1 = 0
                this.check1 = false
            }
        },
        typeTwo() {
            if (this.type2_1.trim() == 'Student1[]') {
                this.score2 = 10
                this.check2 = true
            } else {
                this.score2 = 0
                this.check2 = false
            }
        },
        typeThree() {
            if (this.type2_2.trim() == 's.nextInt()') {
                this.score3 = 10
                this.check3 = true
            } else {
                this.score3 = 0
                this.check3 = false
            }
        },
        typeFour() {
            if (this.type2_3.trim() == 's.nextInt()') {
                this.score4 = 10
                this.check4 = true
            } else {
                this.score4 = 0
                this.check4 = false
            }
        },
        typeFive() {
            if (this.type2_4.trim() == 's.nextInt()') {
                this.score5 = 10
                this.check5 = true
            } else {
                this.score5 = 0
                this.check5 = false
            }
        },
        typeSix() {
            if (this.type2_5.trim() == 'stu[i].getScore1()+stu[i].getScore2()') {
                this.score6 = 10
                this.check5 = true
            } else {
                this.score6 = 0
                this.check6 = false
            }
        },
        typeSeven() {
            if (this.type3_1.trim() == 'FileOutputStream') {
                this.score7 = 10
                this.check7 = true
            } else {
                this.score7 = 0
                this.check7 = false
            }
        },
        typeEight() {
            if (this.type3_2.trim() == 'ObjectOutputStream') {
                this.score8 = 10
                this.check8 = true
            } else {
                this.score8 = 0
                this.check8 = false
            }
        },
        typeNine() {
            if (this.type4.trim() == 'writeObject') {
                this.score9 = 10
                this.check9 = true
            } else {
                this.score9 = 0
                this.check9 = false
            }
        },
        typeTen() {
            if (this.type5_1.trim() == '(Student1)') {
                this.score10 = 5
                this.check10 = true
            } else {
                this.score10 = 0
                this.check10 = false
            }
        },
        typeEleven() {
            if (this.type5_2.trim() == 'readObject()') {
                this.score11 = 5
                this.check11 = true
            } else {
                this.score11 = 0
                this.check11 = false
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
            // if (this.type == 5) {
                // clearInterval(time)
                // this.submit()
            // }
        },
        checkOne(msg) {
            if(this.check1 == false) {
                this.isShow = true
                this.tip = msg
                this.yes1 = false
                this.isOff1 = true
                this.changeNoOn()
                setTimeout(()=>{
                    this.isOff1 = false
                    this.changeNoOn()
                },1000)
            } else {
                this.isOff = true
                this.changeSeccessOn()
                this.isShow = true
                this.tip = ''
                this.check = true
                this.yes1 = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
                setTimeout(()=>{
                    this.isOff = false
                    this.changeSeccessOn()
                },2000)
            }
        },
        checkTwo(msg) {
            if(this.check2 == false) {
                this.isShow = true
                this.tip = msg
                // this.check = false
                this.yes2 = false
                this.isOff1 = true
                this.changeNoOn()
                setTimeout(()=>{
                    this.isOff1 = false
                    this.changeNoOn()
                },1000)
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                this.yes2 = true
                this.isOff = true
                this.changeSeccessOn()
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
                setTimeout(()=>{
                    this.isOff = false
                    this.changeSeccessOn()
                },2000)
            }
        },
        checkThree(msg) {
            if(this.check3 == false) {
                this.isShow = true
                this.tip = msg
                this.isOff1 = true
                this.changeNoOn()
                setTimeout(()=>{
                    this.isOff1 = false
                    this.changeNoOn()
                },1000)
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                this.isOff = true
                this.changeSeccessOn()
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
                setTimeout(()=>{
                    this.isOff = false
                    this.changeSeccessOn()
                },2000)
            }
        },
        checkFour(msg) {
            if(this.check4 == false) {
                this.isShow = true
                this.tip = msg
                this.isOff1 = true
                this.changeNoOn()
                setTimeout(()=>{
                    this.isOff1 = false
                    this.changeNoOn()
                },1000)
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                this.isOff = true
                this.changeSeccessOn()
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
                setTimeout(()=>{
                    this.isOff = false
                    this.changeSeccessOn()
                },2000)
            }
        },
        checkFive(msg) {
            if(this.check5 == false) {
                this.isShow = true
                this.tip = msg
                this.isOff1 = true
                this.changeNoOn()
                setTimeout(()=>{
                    this.isOff1 = false
                    this.changeNoOn()
                },1000)
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                this.isOff = true
                this.changeSeccessOn()
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
                setTimeout(()=>{
                    this.isOff = false
                    this.changeSeccessOn()
                },2000)
            }
        },
        checkSix(msg) {
            if(this.check6 == false) {
                this.isShow = true
                this.tip = msg
                this.isOff1 = true
                this.changeNoOn()
                setTimeout(()=>{
                    this.isOff1 = false
                    this.changeNoOn()
                },1000)
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                this.isOff = true
                this.changeSeccessOn()
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
                setTimeout(()=>{
                    this.isOff = false
                    this.changeSeccessOn()
                },2000)
            }
        },
        checkSeven(msg) {
            if(this.check7 == false) {
                this.isShow = true
                this.tip = msg
                this.isOff1 = true
                this.changeNoOn()
                setTimeout(()=>{
                    this.isOff1 = false
                    this.changeNoOn()
                },1000)
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                this.isOff = true
                this.changeSeccessOn()
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
                setTimeout(()=>{
                    this.isOff = false
                    this.changeSeccessOn()
                },2000)
            }
        },
        checkEight(msg) {
            if(this.check8 == false) {
                this.isShow = true
                this.tip = msg
                this.isOff1 = true
                this.changeNoOn()
                setTimeout(()=>{
                    this.isOff1 = false
                    this.changeNoOn()
                },1000)
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                this.isOff = true
                this.changeSeccessOn()
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
                setTimeout(()=>{
                    this.isOff = false
                    this.changeSeccessOn()
                },2000)
            }
        },
        checkNine(msg) {
            if(this.check9 == false) {
                this.isShow = true
                this.tip = msg
                this.isOff1 = true
                this.changeNoOn()
                setTimeout(()=>{
                    this.isOff1 = false
                    this.changeNoOn()
                },1000)
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                this.isOff = true
                this.changeSeccessOn()
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
                setTimeout(()=>{
                    this.isOff = false
                    this.changeSeccessOn()
                },2000)
            }
        },
        checkTen(msg) {
            if(this.check10 == false) {
                this.isShow = true
                this.tip = msg
                this.isOff1 = true
                this.changeNoOn()
                setTimeout(()=>{
                    this.isOff1 = false
                    this.changeNoOn()
                },1000)
            } else {
                this.isShow = true
                this.tip = ''
                this.check = true
                this.isOff = true
                this.changeSeccessOn()
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
                setTimeout(()=>{
                    this.isOff = false
                    this.changeSeccessOn()
                },2000)
            }
        },
        checkEleven(msg) {
            if(this.check11 == false) {
                this.isShow = true
                this.tip = msg
                this.isOff1 = true
                this.changeNoOn()
                setTimeout(()=>{
                    this.isOff1 = false
                    this.changeNoOn()
                },1000)
            } else {
                this.isOff = true
                this.changeSeccessOn()
                this.isShow = true
                this.tip = ''
                this.check = true
                setTimeout(()=>{
                    this.isShow = false
                    this.check = false
                },1000)
                setTimeout(()=>{
                    this.isOff = false
                    this.changeSeccessOn()
                },2000)
            }
        },
        pass() {
            this.isShow = false
        },
        async submit(){
            let scores = this.score1+this.score2+this.score3+this.score4+this.score5+this.score6+this.score7+this.score8+this.score9+this.score10+this.score11
            if (scores >= this.list.io_score && this.list.thread_score) {
                const res =  await this.$Http.post('/scorecard/setIOScorecard',{
                uid:this.userInfo.uid,
                username: this.userInfo.username,
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
                if (res.code == 200) {
                    // this.open('提交成功')
                this.$router.push({path: '/result', query: {elapsed:this.elapsed,score:this.score1+this.score2+this.score3+this.score4+this.score5+this.score6+this.score7+this.score8+this.score9+this.score10+this.score11}})
                }
            } else if(!this.list.thread_score) {
                const res =  await this.$Http.post('/scorecard/setIOScorecard',{
                uid:this.userInfo.uid,
                username: this.userInfo.username,
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
                if (res.code == 200) {
                    // this.open('提交成功')
                this.$router.push({path: '/result', query: {elapsed:this.elapsed,score:this.score1+this.score2+this.score3+this.score4+this.score5+this.score6+this.score7+this.score8+this.score9+this.score10+this.score11}})
                }
            } else {
                this.$router.push({path: '/result', query: {elapsed:this.elapsed,score:this.score1+this.score2+this.score3+this.score4+this.score5+this.score6+this.score7+this.score8+this.score9+this.score10+this.score11}})
            }
        },

        open(v) {
            this.$message({
                message:v,
                type: 'success'
            });
            // setTimeout(()=>{
                this.$router.push({path: '/result', query: {elapsed:this.elapsed,score:this.score1+this.score2+this.score3+this.score4+this.score5+this.score6+this.score7+this.score8+this.score9+this.score10+this.score11}})
            // },2000)
        },
  }
}
</script>
<style lang="scss" scoped>
.go-back {
    position: relative;
    // float: right;
    // margin-top: -90px;
    // margin-right: 70px;
    // width: 120px;
    width:120px;float:right;margin-top:20px;margin-right:70px;
    .shadow {
        position: absolute;
        top: 2px;
        left: 10px;
        border-radius: 25%;
        box-shadow: 1px 1px 15px rgba(10, 13, 13, 0.9);
        width: 100px;
        height: 28px;
    }
    .img1 {
        cursor: pointer;
        position: absolute;
        width: 100%;
        top: 0;
    }
}
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
            .answerAction1{
                width:95px;margin-left:250px
            }
            .answerAction1:hover{
                cursor: pointer;
                width:97px;margin-left:249px
            }
            .answerAction2{
                width:108px;margin-left:350px
            }
            .answerAction2:hover{
                cursor: pointer;
                width:110px;margin-left:349px
            }
            .answerAction3{
                width:109px;margin-left:350px;margin-top:8px
            }
            .answerAction3:hover{
                cursor: pointer;
                width:111px;margin-left:349px
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
    .yes{
        position:absolute;font-size:24px;width:500px;height:500px;z-index: 9999;color: white;
        margin-top: -300px;margin-left: -320px;
        // background: url('./images/yes2.png') no-repeat center center;
        background-size:100%;
    }
</style>