
module.exports = class ScorecardMod extends require('./model') {

  /**
   * 管理员进行用户信息修改
   * @param u_id
   * @param username
   * @param sex
   * @param address
   * @param type
   */
  static rankingListMod(number,type) {
    return new Promise((resolve, reject) => {
      let sql = `select * from scorecard order by ${type} desc LIMIT  ${number}`
      console.log(sql)
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject("暂无排行数据")
      })
    })
  }
  /**
   * 获取某用户数据
   * @param {} id 
   */
  static getTopScoreMod(id) {
    return new Promise((resolve, reject) => {
      let sql = `select * from scorecard where uid = ${ id } `
      console.log(sql)
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject("查无此人信息")
      })
    })
  }
 /**
  * 修改用户成绩
  * @param {*} uid 
  * @param {*} type 
  * @param {*} score 
  */
  static setTopScoreMod(uid , type , score) {
    return new Promise((resolve, reject) => {
      let sql =`update scorecard set ${type} = ${score} where  uid = ${uid}`
      this.query(sql).then(result => {
        resolve('修改成绩成功')
      }).catch(err => {
        reject("修改成绩失败")
      })
    })
  }
}