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
   * @param params  给sql语句的占位符进行赋值的参数数组
   */
  static query(sql, params) {
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
              reject(err)
            } else {
              results.code = 200;
              let res = {
                data: results,
                code: 200
              }
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