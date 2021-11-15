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
   * 获取用户某游戏类型各知识点得分
   * @param {} type 
   */
  static getAllPointsMod( type, value,page_number, current_page ) {
    page_number = Number(page_number);
    current_page = Number(current_page);
    current_page = (current_page==0) ? 0 : page_number * (Number(current_page)-1)
    let sql = 'select a.id,a.username,a.type,b.io_score,b.elapsed,c.array,c.keyboard,c.methodcall,c.io_stream,c.rw_object,c.conversion,c.scoring_details thelapsed from (user a LEFT JOIN io_scorecard b on a.id = b.uid) LEFT JOIN io_points c on a.id = c.uid'
    sql+=` where b.io_score!='' `
    if( type && value ) sql+=` and a.${type}  like '%${value}%' `
    sql+=` LIMIT ${current_page},${page_number}`
    
    //根据游戏类型选择
    return new Promise((resolve, reject) => {
      console.log(sql)
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject("查无信息")
      })
    })
  }
  static getAllPointsTotalMod(type, value, userType) {
    let sql = 'select count(1) as count  from (user a LEFT JOIN io_scorecard b on a.id = b.uid) LEFT JOIN io_points c on a.id = c.uid'
    sql+=` where b.io_score!='' `
    if( type && value ) sql+=` and a.${type}  like '%${value}%' `
    
    return new Promise((resolve, reject) => {
      this.query(sql, '', false).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
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
      // sql+=' where thread!=""'
      console.log(sql)
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