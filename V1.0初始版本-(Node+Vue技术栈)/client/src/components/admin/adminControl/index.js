import { readExcel } from "@/utils";
export default {
  data() {
    return {
      imgpath: this.basePath + "/upload/upload",
      show: false,
      upload_file: "",
      lists: []
    };
  },
  created() {},
  methods: {
    //成功提示
    open2(v) {
      this.$message({
        message: v,
        type: "success"
      });
    },
    //警告提示
    open3(v) {
      this.$message({
        message: v,
        type: "warning"
      });
    },
    /**
     * 文件读取成功后的回调
     */
    async submit_form(lists) {
      const res = await this.$Http.post("/upload/readXlsx", { lists });
      this.open2("用户导入成功"); //直接成功,后面再改
    },
    /**
     * 直接读取解析xlsx文件
     */
    async readExcel(e) {
      const { upload_file, lists } = await readExcel(e, this.submit_form);
      this.upload_file = upload_file;
      this.lists = lists;
    },


    /**
     * 弹窗操作(ui框架调用)
     * */
    open(index, row) {
      this.$confirm("此操作将继续, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.del(index, row);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};