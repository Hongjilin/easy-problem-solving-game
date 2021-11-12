const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'io_server'

})
/**
 * 封装一个数据库模型基类
 * @type {module.Model}
 */
module.exports = class Model {
  /**
   * 通用的查询方法
   * @param sql 要执行的sql语句
   * @param params  给sql语句的占位符进行赋值的参数数组,可以不传或者用空字符串占位
   * @param isCode  是否插入 code 状态,默认为true 插入
   */
  static query(sql, params,isCode = true) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          console.error(err)
          connection.release()
        } else {
          //query执行sql语句
          connection.query(sql, params, (err, results) => {
            if (err) {
              console.error(err)
              let error = isCode ?{
                msg : err,
                code : 500
              } : err;
              reject(error)
            } else {
              //当请求成功时,返回200给前端做判断
              let res =isCode ? {
                data: results,
                code: 200
              }:results
              resolve(res)
            }
            //结束会话,释放连接
            connection.release()
          })
        }

      })
    })
  }
  static formatParams() {
    let array = []
    for (let i = 0, l = arguments.length; i < l; i++) {
      array.push(arguments[i]);
    }
    return array
  }



}