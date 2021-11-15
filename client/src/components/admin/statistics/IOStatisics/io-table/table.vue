<template>
  <div>
    
      <el-table :data="tableSource" border style="width: 100%">
        <el-table-column prop="id" label="学号"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="array" sortable label="数组得分"></el-table-column>
        <el-table-column prop="keyboard" sortable :sort-method="sortChange" label="键盘输入得分"/>
        <el-table-column prop="methodcall" sortable :sort-method="sortChange" label="方法的调用得分"/>
        <el-table-column prop="io_stream" sortable :sort-method="sortChange" label="输入输出流得分"/>
        <el-table-column prop="rw_object" sortable :sort-method="sortChange" label="读写对象得分"/>
        <el-table-column prop="conversion" sortable :sort-method="sortChange" label="对象类型转换得分"/>
        <el-table-column prop="io_score" sortable :sort-method="sortChange" label="总成绩"/>
        <el-table-column prop="elapsed" sortable :sort-method="sortChange" label="答题用时">
              <template slot-scope="scope">
            <span>{{ !scope.row.elapsed ? null: scope.row.elapsed+'秒' }} </span>
          </template>
        </el-table-column>
          <!-- <template slot-scope="scope">
            <span>{{ !scope.row.io_score ? 0 : scope.row.io_score }}</span>
          </template> -->
        <el-table-column prop="type" sortable label="类型">
          <template slot-scope="scope">
            <span>{{ USERTYPE[scope.row.type] }}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="block" style="text-align:center;margin-top:20px">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="tableCurrpage"
          :page-sizes="[5, 10, 15, 20,30]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableTotal"
        ></el-pagination>
      </div>
   
  </div>
</template>
<script>
import { CONSTANT } from "@/utils";
const { USERTYPE } = CONSTANT;
import bus from "@/store/bus";
const IMITFROM = {
  name: "",
  password: "",
  newpassword: ""
};

export default {
  props: ["tableSource", "tableTotal", "tableCurrpage"],
  data() {
    return {
      form: {
        name: "",
        password: "",
        newpassword: ""
      },
      USERTYPE,
      editShow: false,
      input: "",
      type1: "",
      // tableTotal: 0,
      currentPage: 0,
      pageSize: 10,
      pageNo: 1,
      user: ""
    };
  },

  mounted() {
    console.log(this.testData);
  },
  methods: {
    // 显示修改页面
    editUser(index, row) {
      this.editShow = true;
      this.user = row;
      this.from.name = "";
    },

    //显示修改页面
    goBack() {
      this.editShow = false;
      this.form = IMITFROM;
    },
    /**
     * 给父类参数赋值
     */
    superSetTableConfig() {
      const config = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        pageNo: this.pageNo
      };
      this.$emit("setTableConfig", config);
    },

    //******************************  提示 **************************************** */


    /**
     * 当每页数量或者当前页数改变时重新获取数字
     * @param val
     */
    handleSizeChange(val) {
      this.pageSize = val;
      this.superSetTableConfig();
      this.$emit("search");
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.superSetTableConfig();
      this.$emit("search");
    },
    //警告提示
    warnAlert(v) {
      this.$message({
        message: v,
        type: "warning"
      });
    },
    sortChange(a, b) {
      return a - b;
    }
  }
};
</script>