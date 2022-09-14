var express = require('express');
var router = express.Router();
const user = require('../dao/users_dao')
const fileUp = require('../utils/fileUtils')
const jwtUtil = require('../utils/jwtUtils')
let fs = require('fs')
let formidable = require('formidable')
let xlsx = require('node-xlsx')

router.post('/readXlsx', function (req, res) {
    user.readXlsx(req, res)
})



/**
 * 接受并解析---前端只上传文件,服务端进行解析
 */
router.post('/uploadXlsx', function (req, res) {
  console.log("############# POST / UPLOAD   ##############")
  let fileTypeError = false;
  let target_path = ".\\public\\upload";
  let form = new formidable.IncomingForm();
  form.encoding = 'utf-8';
  form.keepExtensions = true;
  form.maxFieldsSize = 10 * 1024 * 1024;
  form.uploadDir = target_path;

  let files = [];
  let fields = []

  form.on('field', function (field, value) {
    fields.push([field, value])
  })
  form.on('file', function (field, file) {
    // console.log("fileName:"+ file.name)
    let filext = file.name.substring(file.name.lastIndexOf("."), file.name.length)
    if (filext != '.xlsx') {
      //如果不是 xlsx 文件,写入错误信息
      global.xlsxData = 'err'
      fileTypeError = true
    } else {
      fileTypeError = false
      return
    }
    files.push([field, file])
  });
  form.on('end', async function () {
    //遍历上传的文件
    let fileName = ''
    let obj = ''
    let exfalg = true
    let folder_exists = await fs.existsSync(target_path)
    if (folder_exists) {
      let dirList = await fs.readdirSync(target_path)
      // console.log("dirList:",dirList)
      dirList.forEach(item => {
        if (!fs.statSync(target_path + '\\' + item).isDirectory()) {
          fileName = target_path + '\\' + item;
          if (!fileTypeError) {
            obj = xlsx.parse(fileName)
            global.xlsxData = JSON.stringify(obj)
            res.send({
              "rtnCode": "1",
              "rtnInfo": "成功导入数据",
              "data": obj
            })
          } else {
            //解析失败的
            res.send({
              "rtnCode": "1",
              "rtnInfo": "文件格式不对"
            })
            exfalg = false
          }
          fs.unlinkSync(fileName)
        } else {
          res.send({
            "rtnCode": "1",
            "rtnInfo": "系统错误"
          })
          return
        }
      })
    }
  })
  form.on('error', function (err) {
    res.send({
      "rtnCode": "1",
      "rtnInfo": "上传出错"
    })
  })
  form.on('aborted', function () {
    res.send({
      "rtnCode": "1",
      "rtnInfo": "放弃上传"
    });
  });
  form.parse(req)
})

module.exports = router;