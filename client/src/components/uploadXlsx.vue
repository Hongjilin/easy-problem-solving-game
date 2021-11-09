
<template>
  <div>
    <div class="container">
      {{ upload_file || "导入" }}
      <input
        type="file"
        accept=".xls, .xlsx"
        class="upload_file"
        @change="readExcel($event)"
      />
    </div>
    <!--第二种导入方法: 需要服务端配合 -->
    <el-row>
      <el-col :span="24">
        <el-button
          type="primary"
          size="small"
          style="float:right"
          v-show="show"
          color="#F56C6C"
          @click="show = !show"
        >
          <i class="el-icon-upload el-icon--left"></i>上传
        </el-button>
        <transition name="el-zoom-in-top">
          <el-card class="box-card" v-show="!show" style="margin-top: 10px">
            <div slot="header" class="clearfix" style="text-align: center">
              <span>上传excel表格（.xlsx）</span>
            </div>
            <div class="transition-box" style="display: flex;margin-top: 40px">
              <el-upload
                ref="upload"
                class="upload-demo"
                drag
                :action="imgpath"
                multiple
                style="margin: auto"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或
                  <em>点击上传</em>
                </div>
                <div class="el-upload__tip" slot="tip" style="text-align: center">
                  文件上传速度跟当前环境有关，请耐心等待
                  <el-row :gutter="20" style="margin-top: 10px">
                    <el-col :span="12">
                      <el-button size="small" @click="show = !show" style="width: 100%">关闭</el-button>
                    </el-col>
                    <el-col :span="12">
                      <el-button
                        size="small"
                        type="primary"
                        @click="importxlsx"
                        style="width: 100%"
                      >导入</el-button>
                    </el-col>
                  </el-row>
                </div>
              </el-upload>
            </div>
          </el-card>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
      this.open2("导入成功");//直接成功,后面再改
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
     * 导入文件操作
     */
    importxlsx() {
      if (this.$refs.upload.uploadFiles.length == 0)
        this.open3("请选择要导入的文件");
      else {
        this.$confirm("将文件导入,是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$axiosjwt({
              url: "/users/setXlsxData",
              method: "post",
              success: result => {
                this.$message({
                  type: "success",
                  message: result
                });
              }
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "文件导入已经取消"
            });
          });
        // this.get(this.pageSize, this.pageNo);
      }
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
</script>

<style scoped lang="scss">
.container {
  border: none;
  border-radius: 4px;
  background-color: #409eff;
  height: 40px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  min-width: 80px;
  *zoom: 1;
}

.upload_file {
  font-size: 20px;
  opacity: 0;
  position: absolute;
  filter: alpha(opacity=0);
  width: 60px;
}
</style>
