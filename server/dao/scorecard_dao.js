
const {
  GAMETYPE
} = require('../utils/constant');
const  jwtUtil=require('../utils/jwtUtils')
module.exports=class ScorecardDao extends  require('../model/scorecard_mod'){
    /**
     * 获取排行
     * type  IO流:io_score ; 多线程: thread_score; 默认IO流
     * @param {*} req 
     * @param {*} resp 
     */
    static  async rankingList(req,resp){
      //如果不传入数量限制,默认查询100条数据
        let { number = 100, type= GAMETYPE.IO } = req.query
        let res = await this.rankingListByIOMod(number,type) 
        resp.send({data:res})
    }

    /**
     * 获取某用户知识点得分情况
     * @param {*} req 
     * @param {*} resp 
     */
    static  async getUserPoints(req,resp){
        let { uid, type = GAMETYPE.IO} = req.query
        let res= await  this.getUserPointsMod(uid,type)
        resp.send(res)
    }
    /**
     * 获取知识点得分情况
     * @param {*} req 
     * @param {*} resp 
     */
    static  async getAllPoints(req,resp){
        let {  type  ,page_number, current_page, value ,gameType = GAMETYPE.IO} = req.query
        let res= await  this.getAllPointsMod({type,value, page_number, current_page,gameType})
        let totals = await  this.getAllPointsTotalMod(type, value, gameType)
        res.total = totals[0].count
        resp.send(res)
    }

    
    /**
     * 获取某游戏平均得分
     * @param {*} req 
     * @param {*} resp 
     */
    static  async getAveragePoints(req,resp){
        let { type = GAMETYPE.IO} = req.query
        let res= await  this.getAveragePointsMod(type)
        resp.send(res)
    }
    /**
     * 写入某用户成绩
     * @param {*} req 
     * @param {*} resp 
     */
    static  async setTopScore(req,resp){
        let { uid , type , score } = req.body
        let res= await  this.setTopScoreMod(uid , type , score)
        resp.send({data:res})
    }
    /**
     * 写入某用户成绩IO成绩
     * @param {*} req 
     * @param {*} resp 
     */
    static  async setIOScorecard(req,resp){
        let res1= await  this.setIOScorecardMod(req.body)
        let res2= await  this.setIOPointsMod(req.body)
        let data = {}
        if(res1.code == 200 && res2.code == 200) data={code:200,msg:'成绩存入成功'}
        else data={code:500,msg:'成绩存入失败'}
        resp.send(data)
    }
    static  async setThreadScorecard(req,resp){
        let res1= await  this.setThreadScorecardMod(req.body)
        let res2= await  this.setThreadPointsMod(req.body)
        let data = {}
        if(res1.code == 200 && res2.code == 200) data={code:200,msg:'成绩存入成功'}
        else data={code:500,msg:'成绩存入失败'}
        resp.send(data)
    }

}