const tools = require('../utils/tools')

module.exports = class users_mod extends require('./model') {
  /**
   * 数据库登录
   * @param username
   * @param password
   * @returns {Promise<any>}
   * @constructor
   */
  static LoginUser(id, password, type) {
    return new Promise((resolve, reject) => {
      // let sql="select * from user where binary id='"+id+"' and password='"+password+"' and type= "
      let sql = `select * from user where binary id='${id}' and password='${password}' and type= ${type}`
      console.log(sql)
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject('登录失败')
      })

    })
  }



  /**
   * 获取某用户信息
   * @param {*} uid 
   */
  static getUserInfoMod(uid) {
    return new Promise((resolve, reject) => {
      // let sql="select * from user where binary id='"+id+"' and password='"+password+"' and type= "
    //   let sql = 'select a.id,a.username,a.type,b.io_score,b.elapsed io_elapsed,c.thread_score,c.elapsed thread_elapsed from user a,io_scorecard b,thread_scorecard c where a.id = b.uid and a.id = c.uid  and a.id = ' + uid
      let sql = 'select a.id,a.username,a.type,b.io_score,b.elapsed,c.thread_score,c.elapsed thelapsed from (user a LEFT JOIN io_scorecard b on a.id = b.uid) LEFT JOIN thread_scorecard c on a.id = c.uid where a.id =' + uid
      console.log(sql)
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject('查无此人信息')
      })
    })
  }
  static getAllUsersInfoMod(uid) {
    return new Promise((resolve, reject) => {
      // let sql="select * from user where binary id='"+id+"' and password='"+password+"' and type= "
      // let sql = 'select a.id,a.username,a.type,b.io_score,b.elapsed io_elapsed,c.thread_score,c.elapsed thread_elapsed from user a,io_scorecard b,thread_scorecard c  where a.id = b.uid and a.id = c.uid'
      let sql = 'select a.id,a.username,a.type,b.io_score,b.elapsed,c.thread_score,c.elapsed thelapsed from (user a LEFT JOIN io_scorecard b on a.id = b.uid) LEFT JOIN thread_scorecard c on a.id = c.uid'
      console.log(sql)
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject('查无信息')
      })
    })
  }
  /**
   * 根据类型分页查询所有用户信息
   * @param {*} page_number 
   * @param {*} current_page 
   * @param {*} userType 
   */
  static getUsersInfoByTypeMod(page_number, current_page, type, value, userType) {
    page_number = Number(page_number);
    current_page = Number(current_page);
    current_page = (current_page==0) ? 0 : page_number * (Number(current_page)-1)
    let sql = `select a.id,a.username,a.type,b.io_score,b.elapsed,c.thread_score,c.elapsed thelapsed from (user a LEFT JOIN io_scorecard b on a.id = b.uid) LEFT JOIN thread_scorecard c on a.id = c.uid`
    
    if( type && value && userType ) sql+=` where a.${type}  like '%${value}%' and type = ${userType}`
    else if( type && value && !userType ) sql+=` where a.${type}  like '%${value}%'`
    else if(userType) sql+=` where  type = ${userType}`


    sql+=` LIMIT ${current_page},${page_number}`
    return new Promise((resolve, reject) => {
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }
  static getUsersTotalMod(type, value, userType) {
    return new Promise((resolve, reject) => {
      let sql = 'select count(1) as count from user '
      if( type && value && userType ) sql+=` where a.${type}  like '%${value}%' and type = ${userType}`
      else if( type && value && !userType ) sql+=` where ${type} like '%${value}%'`
      else if(userType) sql+=` where  type = ${userType}`
      this.query(sql, '', false).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }



  /**
   *修改用户信息
   * @param u_id
   * @param oldpassword
   * @param newpassword
   */
  static editUserMod(uid, username, password) {
    console.log(uid, username, password)
    let sql=''
    //根据传入参数不同,拼接不同sql
    if (!username && !password || !uid) return ;
    if (username && !password) sql='update `user` set username = "'+ username + '"'
    if (password && !username) sql='update `user` set password = "'+ password + '"'
    if (password && username)  sql='update `user` set password = "'+ password +'", username = "' +  username + '"'
    sql+=' where id = '+ uid
    console.log(sql)
    return new Promise((resolve, reject) => {
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }
  static editPwdMod(uid, username,  password,old_passowrd) {
    // console.log(uid, username,  password,old_passowrd)
    console.log(!!password && !username && !!old_passowrd,'xx')
    let sql=''
    //根据传入参数不同,拼接不同sql
    if (!username && !password || !uid) return ;
    if (username && !password) sql='update `user` set username = "'+ username + '"  where id = '+ uid
    if (!!password && !username && !!old_passowrd) sql='update `user` set password = "'+ password + '" where password = "'+ old_passowrd + '" and id = '+ uid
    if (password && username)  sql='update `user` set password = "'+ password +'", username = "' +  username + '"  where id = '+ uid + ' password = "'+ old_passowrd+'"'
    // else return;
    console.log(sql)
    return new Promise((resolve, reject) => {
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }






  static readXlsxMod(lists) {
    console.log(lists, "谢谢谢谢")
    if (lists.length <= 0) {
      resp.send({msg: '正确的用户数据为空',code:400});
      return;
    };
   lists.map(async (item)=>{
   console.log(item,"xxxxxxxxxxxxxxxx")
   const {id,username,password,type} = item;
    let  sql= `INSERT INTO user(id,username,password,type)  VALUES(${id}, '${username}', '${password}', ${type});`
    return await new Promise((resolve, reject) => {
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  })
  return {code:200,msg:'导入完成'}

  }




  /**
   * 将redis数据未重复的进行插入
   * @param inXlsxArr
   */
  static inXlsxData(inXlsxArr) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < inXlsxArr.length; i++) {
        let sql = "insert into user (id,username,password,head,address,sex,classes,type) values(" + inXlsxArr[i].id + ", '" + inXlsxArr[i].username + "' , '" + inXlsxArr[i].password + "', '" + inXlsxArr[i].head + "'," +
          "'" + inXlsxArr[i].address + "', '" + inXlsxArr[i].sex + "', '" + inXlsxArr[i].classes + "', '" + inXlsxArr[i].type + "')"
        this.query(sql).then(result => {
          resolve(result)
        }).catch(err => {
          reject(err)
        })
      }
    })
  }
  static getUsersByTypePageTotal(type) {
    return new Promise((resolve, reject) => {
      let sql = "select count(1) as count from user where type = " + type
      this.query(sql).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }

  /**
   * 删除用户表用户
   * @param id
   */
  static delUserdataMod(id) {
    return new Promise((resolve, reject) => {
      let sql = "delete from user where id = " + id
      console.log(sql)
      this.query(sql).then(result => {
        resolve("删除用户表用户成功")
      }).catch(err => {
        reject("删除用户表用户失败")
      })
    })
  }
  /**
   * 删除阅读表用户
   * @param id
   */
  static delRead(id) {
    return new Promise((resolve, reject) => {
      let sql = "delete from `read` where u_id = " + id
      console.log(sql)
      this.query(sql).then(result => {
        resolve(".删除阅读表用户成功")
      }).catch(err => {
        reject(",删除阅读表用户失败")
      })
    })
  }

  /**
   * 管理员进行用户信息修改
   * @param u_id
   * @param username
   * @param sex
   * @param address
   * @param type
   */
  static upUserdataMod(u_id, username, sex, address, type) {
    let currTime = tools.getDate19()
    return new Promise((resolve, reject) => {
      let sql = "update `user` set username= '" + username + "', sex='" + sex + "' , address='" + address + "', type =" + type + " , modifytime= '" + currTime + "' where id=" + u_id
      console.log(sql)
      this.query(sql).then(result => {
        resolve("更新成功")
      }).catch(err => {
        reject("可能是因为网络不好,更新失败")
      })

    })
  }


  /**
   * 修改个人头像
   * @param head_imgUrl
   * @param u_id
   */
  static upUserHeadMod(head_imgUrl, u_id) {
    return new Promise((resolve, reject) => {
      let sql = "update `user` set head= '" + head_imgUrl + "' where id = " + u_id
      this.query(sql).then(result => {
        resolve("上传成功")
      }).catch(err => {
        reject(err)
      })
    })
  }



}