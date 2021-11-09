

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
        let res= await  this.LoginUser(body.id,body.password,body.type)
        // let loginData= await  this.LoginUserByid(body.username,body.password,body.type)
        //如果获取到了登录用户信息则登陆成功
        if (res?.length!=0){
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
      const { lists } = req?.body;
      let res= await  this.readXlsxMod(lists)
      resp.send(res)
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