
<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card>
          <el-select v-model="value" placeholder="请选择查询字段" style="width: 15%">
            <el-option label="工号" value="id"></el-option>
            <el-option label="姓名" value="username"></el-option>
            <el-option label="籍贯" value="address"></el-option>
            <el-option label="班级" value="classes"></el-option>
          </el-select>
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input"
            style="width:20%"
          ></el-input>
          <el-button type="primary" size="small" style="margin-left:10px" @click="select">搜索</el-button>
          <el-button type="primary" size="small" style="margin-left:10px" @click="clearvalue">重置</el-button>
          <el-button
            type="primary"
            size="small"
            style="float:right"
            v-show="!show"
            color="#F56C6C"
            @click="show = !show"
          >
            <i class="el-icon-upload el-icon--left"></i>上传
          </el-button>
        </el-card>

        <transition name="el-zoom-in-top">
          <el-row>
            <el-col :span="24">
              <transition name="el-zoom-in-top">
                <el-card class="box-card" v-show="show" style="margin-top: 10px">
                  <div slot="header" class="clearfix" style="text-align: center">
                    <span>上传excel表格（.xlsx）</span>
                  </div>
                  <div class="containerbtn">
                    <div @click="show = !show">单个注册</div>
                    <div>
                      {{ upload_file || "批量导入" }}
                      <input
                        type="file"
                        accept=".xls, .xlsx"
                        class="upload_file"
                        @change="readExcel($event)"
                      />
                    </div>
                  </div>
                </el-card>
              </transition>
            </el-col>
          </el-row>
        </transition>

        <el-card style="margin-top:20px;margin-bottom: 5rem">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" sortable label="工号"></el-table-column>
            <el-table-column prop="username" label="姓名"></el-table-column>
            <el-table-column prop="sex" label="性别"></el-table-column>
            <el-table-column prop="address" label="籍贯"></el-table-column>
            <el-table-column prop="classes" label="班级"></el-table-column>
            <el-table-column label="类型">教师</el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  style="padding: 3px 0"
                  type="text"
                  @click="open(scope.$index, scope.row)"
                >删除</el-button>
                <el-button
                  style="padding: 3px 0"
                  type="text"
                  @click="cshow(scope.$index, scope.row)"
                >编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block" style="text-align:center;margin-top:20px">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 20, 30, 40,50]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="UserSize"
            ></el-pagination>
          </div>
        </el-card>
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
      lists: [],

      form: {
        name: "",
        sex: "",
        address: "",
        type: ""
      },
      value: "姓名",
      show1: false,
      show: false,
      input: "",
      type1: "",
      UserSize: 0,
      currentPage: 1,
      tableData: [],
      pageSize: 10,
      pageNo: 1,
      user: ""
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
      this.open2("导入成功"); //直接成功,后面再改
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
@import "./index.scss";
</style>
