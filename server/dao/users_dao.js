

const  jwtUtil=require('../utils/jwtUtils')
module.exports=class users_dao extends  require('../model/users_mod'){
    /**
     * 登录
     * @param req
     * @param resp
     * @returns {Promise<void>}
     * @constructor
     */
    static  async Login(req,resp){
        let body= req.body
        //如果不传入type,则默认为学生
        const { id, password, type = 1 } = body
        let res= await  this.LoginUser(id, password, type)
        // let loginData= await  this.LoginUserByid(body.username,body.password,body.type)
        //如果获取到了登录用户信息则登陆成功
        if(res.length!=0){
          let data = res[0];
            let jwt_token= jwtUtil.sign({
                id:data.id,
                username:data.username,
            },global.globalKey,3600)
            // resp.status(200).send({data,jwt_token})
            resp.status(200).send({data,jwt_token})
            return;
        }
          resp.status(500).send("用户名或者账号输入错误")
    }
    /**
     * 读取并写入用户信息
     * @param {*} req 
     * @param {*} resp 
     */
    static async readXlsx(req,resp){
      const { lists } = req.body;
      let res= await  this.readXlsxMod(lists)
      resp.send(res)
    }


    /**
     * 获取某用户信息
     * @param {*} req 
     * @param {*} resp 
     */
    static async getUserInfo(req,resp){
      const { uid } = req.query;
      let res= await  this.getUserInfoMod(uid)
      resp.send(res)
    }
    /**
     * 根据类型查询所有用户信息、总条数
     * @param {*} req 
     * @param {*} resp 
     */
    static async getUsersInfoByType(req,resp){
      const { page_number, current_page, type, value, userType} = req.query;
      let res= await  this.getUsersInfoByTypeMod(page_number, current_page, type, value, userType)
      let totals = await  this.getUsersTotalMod(type, value, userType)
      res.total = totals[0].count
      resp.send(res)
    }

  /**
     * 修改用户信息
     * @param req
     * @param resp
     * @returns {Promise<void>}
     */
    static  async editUser(req,resp){
     const {uid, username, password}=req.body;
      let res = await this.editUserMod(uid, username, password)
      if(!res) { resp.send({msg:'无任何修改',code:400});return }
      const { data : {affectedRows} ,code} = res
      resp.send({affectedRows,code})
  }

     
    /**
     * **************************************修改个人信息**************************************
     */
    /**
     * 修改个人密码
     * @param req
     * @param resp
     * @returns {Promise<void>}
     */
    static  async upPwd(req,resp){
        let verify=await  jwtUtil.verifysync(req.body.token,globalKey)
        let u_id=verify.id
        let oldpassword=req.body.oldpassword
        let newpassword=req.body.newpassword
        let results=await this.upPwdMod(u_id,oldpassword,newpassword)
        if (results.changedRows==0)        resp.send("修改失败,可能是旧密码错误或者新密码与旧密码相同")
        else  resp.send("密码修改成功")
    }

    /**
     * 修改个人头像
     * @param req
     * @param resp
     * @returns {Promise<void>}
     */
    static async upUserHead(req,resp){
        // console.log(req.u_id)
        let results=await this.upUserHeadMod(req.head_imgUrl,req.u_id)
        resp.send(results)
    }


}