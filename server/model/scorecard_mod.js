const {
  GAMETYPE,
  TABLENAME
} = require('../utils/constant');
module.exports = class ScorecardMod extends require('./model') {

  /**
   * 获取不同游戏排行榜
   * @param {} number 
   * @param {*} type 
   */
  static rankingListByIOMod(number, type) {
    //根据游戏类型选择
    const tableName = GAMETYPE.IO == type ? TABLENAME.IO_SCORECARD : TABLENAME.THREAD_SCORECARD;
    return new Promise((resolve, reject) => {
      //根据传入类别不同查询不同的表
      let sql = `select * from ${tableName} order by ${type} desc, elapsed asc  LIMIT  ${number}`
      console.log(sql)
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject("暂无排行数据")
      })
    })
  }

  /**
   * 获取某用户某游戏类型各知识点得分
   * @param {} id 
   */
  static getUserPointsMod(id, type) {
    //根据游戏类型选择
    const tableName = GAMETYPE.IO == type ? TABLENAME.IO_POINTS : TABLENAME.THREAD_POINTS;
    return new Promise((resolve, reject) => {
      let sql = `select * from ${tableName} where uid = ${ id } `
      console.log(sql)
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject("查无此人信息")
      })
    })
  }
  /**
   * 获取某游戏平均得分
   * @param {*} type 
   */
  static getAveragePointsMod(type) {
    //根据游戏类型选择
    return new Promise((resolve, reject) => {
      let sql = GAMETYPE.IO == type ? `SELECT avg(array) as array,avg(keyboard) as keyboard, avg(methodcall) as methodcall,avg(io_stream) as io_stream,avg(rw_object) as rw_object,avg(conversion) as conversion FROM ${TABLENAME.IO_POINTS} ` :
        `SELECT avg(thread) as thread,avg(async) as async, avg(judgment) as judgment,avg(change_state) as change_state FROM ${TABLENAME.THREAD_POINTS} `
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject("暂无成绩")
      })
    })
  }
  /**
   * 修改用户成绩
   * @param {*} uid 
   * @param {*} type 
   * @param {*} score 
   */
  static setTopScoreMod(uid, type, score) {
    return new Promise((resolve, reject) => {
      let sql = `update scorecard set ${type} = ${score} where  uid = ${uid}`
      this.query(sql).then(result => {
        resolve('修改成绩成功')
      }).catch(err => {
        reject("修改成绩失败")
      })
    })
  }
}