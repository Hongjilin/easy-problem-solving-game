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

          <SuperTable/>
       
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { readExcel } from "@/utils";
import SuperTable from "./table";
export default {
  components: { SuperTable },
  data() {
    return {
      upload_file: "",
      lists: [],

      
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
  
  methods: {
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

    // 显示修改页面
    cshow(index, row) {
      this.show1 = true;
      this.user = row;
      this.form.sex = row.sex;
      this.from.name = "";
      this.form.address = "";
      if (row.type == 2) {
        this.form.type = "学生";
      }
      if (row.type == 3) {
        this.form.type = "教师";
      }
    },
    //显示修改页面
    goBack() {
      this.show1 = false;
    },
    //清除
    clearvalue() {
      this.get(this.pageSize, this.pageNo);
      this.input = "";
      this.value = "";
    },
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

  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
