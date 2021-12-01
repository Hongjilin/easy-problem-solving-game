import XLSX from "xlsx";
/**
 * 
 * @param {*} e 传入节点
 * @param {*} callback  可选参数-成功后的回调,会将最终的数据返回出去
 */
function readExcel(e, callback) {
  // 读取表格文件
  const files = e.target.files;
  let upload_file = ''
  let lists = [];
  if (files.length <= 0) {
    return false;
  } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
    this.$message({
      message: "上传格式不正确，请上传xls或者xlsx格式",
      type: "warning"
    });
    return false;
  } else {
    // 更新获取文件名
    upload_file = files[0].name;
  }

  const fileReader = new FileReader();
  let isTrue = true
  fileReader.onload = ev => {
    try {
      const data = ev.target.result;
      const workbook = XLSX.read(data, {
        type: "binary"
      });
      const wsname = workbook.SheetNames[0]; //取第一张表
      const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容
      // 从解析出来的数据中提取相应的数据
      ws.forEach(item => {
        if (!(item["学号"] && (item["名字"] || item["姓名"]) && item["密码"] && (item["身份"] || item["类型"]))) {
          isTrue = false
        }
        lists.push({
          id: item["学号"],
          username: item["名字"] || item["姓名"],
          password: item["密码"],
          type: item["身份"] || item["类型"]
        });

      });
    } catch (e) {
      console.error(e)
      return false;
    }
    //当回调函数不为空时调用: 不用回调函数需要将这个文件读取转为同步函数,需进一步封装
    callback && callback(lists,isTrue)
  };
  fileReader.readAsBinaryString(files[0]);
  return {
    upload_file,
    lists
  }
}
export default readExcel;

/**
   <div class="container">
      {{ upload_file || "导入" }}
      <input
        type="file"
        accept=".xls, .xlsx"
        class="upload_file"
        @change="readExcel($event)"
      />
    </div> 
 */