<template>
  <div>
    <el-row>
      <el-col :span="24">
        <SuperHeader @getTableData="getTableData($event)"/>

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

          <SuperTable :testData="tableData"/>
       
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { readExcel } from "@/utils";
import SuperTable from "./table";
import SuperHeader from "./header";
export default {
  /**
   * 1 表格数据应该再父组件中调用,传给子组件
   * 2 搜索后将更新表格数据
   */
  components: { SuperTable,SuperHeader },
  data() {
    return {
      upload_file: "",
      lists: [],

      value: "学号",
      show1: false,
      show: false,
      input: "",
      type1: "",
      UserSize: 0,
      currentPage: 1,
      tableData: ["sss"],
      pageSize: 10,
      pageNo: 1,
      user: ""
    };
  },
  
  methods: {

 getTableData(data){
   console.log("123123123",data)
   this.tableData=data;
   console.log( this.tableData," this.tableData this.tableData this.tableData")
 },

    
  /**
     * 分页搜索用户信息
     * */
    select() {
      if (!this.input) this.open3("请输入要搜索的关键字!!!!!!");
      else {
        console.log("搜索");
        // this.$axiosjwt({
        //   url: "/admin/getUsersByTypeAndChar",
        //   method: "get",
        //   data: {
        //     type: 2,
        //     inputText: this.input,
        //     CharType: this.value,
        //     pageNum: this.pageSize,
        //     currPage: this.pageNo - 1
        //   },
        //   success: result => {
        //     this.tableData = result.data;
        //     this.tableTotal = result.total;
        //   }
        // });
      }
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
