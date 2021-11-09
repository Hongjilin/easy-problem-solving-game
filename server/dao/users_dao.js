

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
     * 根据token解析成用户信息
     * @param req
     * @param resp
     */
    static async getUserDataByToken(req,resp){
        let result=await jwtUtil.verifysync(req.query.token,global.globalKey)
        resp.send(result)
    }

    /**
     * 根据用户类型进行用户信息获取(分页获取总数量与数据)
     * @param req
     * @param resp
     */
    static async getUsersByTypePage(req,resp){
        // console.log(req.query)
        let query=req.query;
        let data = await this.getUsersByTypePageMod(query.type,query.currPage,query.pageNum)
        let total=await this.getUsersByTypePageTotal(query.type)
        resp.send({data,total:total[0].count})
    }
    /**
     * 用户删除(同时清空该用户阅读记录
     * @param req
     * @param resp
     */
    static async delUserdata(req,resp){
            let results= await this.delUserdataMod(req.query.u_id)
            results+=await  this.delRead(req.query.u_id)
          resp.send(results)
    }
    /**
     * 更改用户信息
     * @param req
     * @param resp
     */
    static async upUserdata(req,resp){
        let body= req.body
        let u_id=body.u_id
        let username=body.username
        let sex=body.sex
        let address=body.address
        let type=body.type
            let results= await this.upUserdataMod(u_id,username,sex,address,type)
          resp.send(results)
    }

    /**
     * 将redis的xlsx数据写入数据库
     * @param req
     * @param resp
     * @returns {Promise<void>}
     */


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