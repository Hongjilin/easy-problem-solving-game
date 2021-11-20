<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card class="header-box">
          <Search
            @getTableData="getTableData($event)"
            @search="search($event)"
            @clearvalue="clearvalue($event)"
            @setTableConfig="setTableConfig($event)"
          />
          <div>  <ExportToExcel class="export-class"/></div>
     
          <el-button
            type="primary"
            size="small"
            style="float:right"
            v-show="!show"
            color="#F56C6C"
            @click="show = !show"
            class="upload-button"
          >
            <i class="el-icon-upload el-icon--left"></i>导入用户
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
                    <div>
                      {{ upload_file || "选择文件" }}
                      <input
                        type="file"
                        accept=".xls, .xlsx"
                        class="upload_file"
                        @change="readExcel($event)"
                      />
                    </div>
                    <div @click="show = !show">关闭</div>
                  </div>
                </el-card>
              </transition>
            </el-col>
          </el-row>
        </transition>

        <SuperTable
          @getTableData="getTableData($event)"
          :table-source="tableData"
          :table-total="tableTotal"
          :table-currpage="currentPage"
          @setTableConfig="setTableConfig($event)"
          @search="search($event)"
          @getUsersInfoByTypeToChilds="getUsersInfoByTypeToChilds($event)"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { readExcel } from "@/utils";
import SuperTable from "./table";
import Search from "./search";
import ExportToExcel from "./export-to-excel";
import BgMusic from '../../common/bg-music'

export default {
  /**
   * 1 表格数据应该再父组件中调用,传给子组件
   * 2 搜索后将更新表格数据
   */
  components: { SuperTable, Search, ExportToExcel ,BgMusic},
  data() {
    return {
      upload_file: "",
      lists: [],
      currentPage: 0,
      pageSize: 10,
      searchVlue: "",
      selectLabel: "",
      selectType: "",

      show1: false,
      show: false,
      // input: "",
      type1: "",
      UserSize: 0,
      tableData: [],

      pageNo: 1,
      user: "",
      tableTotal: 0
    };
  },
  created() {
    this.getUsersInfoByType(this.currentPage, this.pageSize);
  },
  methods: {
    //警告提示
    warnAlter(v) {
      this.$message({
        message: v,
        type: "warning"
      });
    },
    /********************* S:派发给子组件的 ******************************** */
    /**
     * 派发给子组件的修改
     */
    async getTableData(res) {
      this.tableData = res?.data;
      this.tableTotal = res?.total;
      //防止不在首页,再去搜索,导致当前页无数据,所以出现这种状况时返回第一页
      if (res?.data?.length == 0 && res?.total != 0) {
        this.currentPage = 0;
        this.search();
      }
    },
    getUsersInfoByTypeToChilds(){
       this.getUsersInfoByType(this.currentPage, this.pageSize);
    }
    ,
    /**
     * 派发给子组件的table配置项修改
     */
    setTableConfig(config, isHomePage) {
      const {
        currentPage = this.currentPage,
        pageSize = this.pageSize,
        value = this.searchValue,
        type = this.selectLabel,
        userType = this.selectType
        // pageNo = this.pageNo,
      } = config;
      this.currentPage = currentPage;
      this.pageSize = pageSize;
      this.searchValue = value;
      this.selectLabel = type;
      this.selectType = userType;
      this.search(isHomePage);
    },

    /**
     * 派发给子组件的搜索
     */
    async search(isHomePage = false) {
      const res = await this.$Http.get("/users/getUsersInfoByType", {
        params: {
          value: this.searchValue,
          type: this.selectLabel,
          userType: this.selectType,
          page_number: this.pageSize,
          current_page: this.currentPage
        }
      });
      if (res?.code == 200) {
        this.getTableData(res);
      }
      // }
    },
    /**
     * 清空value
     */
    async clearvalue({ page_number, current_page }) {
      const res = await this.$Http.get("/users/getUsersInfoByType", {
        params: {
          page_number: 10,
          current_page: 0
        }
      });
      if (res?.code == 200) this.getTableData(res);
      this.currentPage = 0;
      this.searchValue = "";
      this.selectLabel = "";
      this.selectType = "";
    },
    /**
     *
     */
  
    /**
     * 分页获取用户信息
     * @param current_page 当前页
     * @param  page_number 每页多少
     * @param type 如果不传第三个参数,默认为1(学生)
     *  this.tableData列表 数据
     *   this.tableTotal
     */
    async getUsersInfoByType(current_page, page_number) {
      const res = await this.$Http.get("/users/getUsersInfoByType", {
        params: {
          page_number,
          current_page
        }
      });
      if (res.code == 200) {
        this.tableData = res.data;
        this.tableTotal = res.total;
      }
    },

    /**
     * 文件读取成功后的回调
     */
    async submit_form(lists) {
      //此处需要过滤
      const res = await this.$Http.post("/upload/readXlsx", { lists });
      this.getUsersInfoByType(this.currentPage, this.pageSize);
      if (res?.code == 200) this.open2("导入成功"); //直接成功,后面再改
      this.clearvalue()
    },

    /**
     * 直接读取解析xlsx文件
     */
    async readExcel(e) {
      const { upload_file, lists } = await readExcel(e, this.submit_form);
      this.upload_file = upload_file;
      this.lists = lists;
    },

    //成功提示
    open2(v) {
      this.$message({
        message: v,
        type: "success"
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
