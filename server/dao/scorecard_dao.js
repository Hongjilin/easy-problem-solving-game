
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
        let { number = 100, type= GAMETYPE.IO } = req?.query
        let res = await this.rankingListByIOMod(number,type) 
        resp.send({data:res})
    }

    /**
     * 获取某用户知识点得分情况
     * @param {*} req 
     * @param {*} resp 
     */
    static  async getUserPoints(req,resp){
        let { uid, type = GAMETYPE.IO} = req?.query
        let res= await  this.getUserPointsMod(uid,type)
        resp.send({data:res})
    }
    /**
     * 获取某游戏平均得分
     * @param {*} req 
     * @param {*} resp 
     */
    static  async getAveragePoints(req,resp){
        let { type = GAMETYPE.IO} = req?.query
        let res= await  this.getAveragePointsMod(type)
        resp.send({data:res})
    }
    /**
     * 写入某用户成绩
     * @param {*} req 
     * @param {*} resp 
     */
    static  async setTopScore(req,resp){
        let { uid , type , score } = req?.body
        let res= await  this.setTopScoreMod(uid , type , score)
        resp.send({data:res})
    }

}