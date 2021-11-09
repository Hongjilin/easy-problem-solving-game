

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
        let { number = 100, type='io_score' } = req?.query
        let res= await  this.rankingListMod(number,type)
        resp.send({data:res})
    }
    /**
     * 获取某用户信息
     * @param {*} req 
     * @param {*} resp 
     */
    static  async getTopScore(req,resp){
        let { uid } = req?.query
        let res= await  this.getTopScoreMod(uid)
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