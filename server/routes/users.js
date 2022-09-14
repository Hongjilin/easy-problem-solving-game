var express = require('express');
var router = express.Router();
const user = require('../dao/users_dao')
const fileUp = require('../utils/fileUtils')
const jwtUtil = require('../utils/jwtUtils')

String.prototype.IsPicture = function () {
  let strFilter = ".jpeg|.gif|.jpg|.png|.svg|.pic|.bmp|"
  if (this.indexOf('.') > -1) {
    let p = this.lastIndexOf(".")
    let strPostfix = this.substring(p, this.length) + "|"
    strPostfix = strPostfix.toLowerCase()
    if (strPostfix.indexOf(strPostfix) > -1) return true
  }
  return false;
}


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('users进入路由根目录');

});
router.post('/login', function (req, res) {
  user.Login(req, res)
});
router.get('/getUserInfo', function (req, res, next) {
  user.getUserInfo(req, res)
});
router.get('/getAllUsersInfo', function (req, res, next) {
  user.getAllUsersInfo(req, res)
});
router.get('/getUsersInfoByType', function (req, res, next) {
  user.getUsersInfoByType(req, res)
});
router.post('/deleteUserByID', function (req, res, next) {
  user.deleteUserByID(req, res)
});

router.post('/editUser', function (req, res) {
  user.editUser(req, res)
})
router.post('/editPWD', function (req, res) {
  user.editPWD(req, res)
})

/**
 * ******************修改个人信息************************
 */


router.post('/upicon', async function (req, res) {
  let head_imgUrl = await fileUp.upload(req)
  req.head_imgUrl = head_imgUrl
  let isPicture = head_imgUrl.IsPicture();
  if (!isPicture) res.send("没有选择图片或者选择的不是图片")
  else {
    let verify = await jwtUtil.verifysync(req.query.token, globalKey)
    req.u_id = verify.id
    user.upUserHead(req, res)
  }
})

module.exports = router;