<template>
  <div>
    
    <el-select class="search-select" v-model="selectLabel" placeholder="请选择查询字段" >
      <el-option label="学号" value="id"></el-option>
      <el-option label="姓名" value="username"></el-option>
      <!-- <el-option label="籍贯" value="address"></el-option> -->
      <!-- <el-option label="班级" value="classes"></el-option> -->
    </el-select>
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="searchValue"
      style="width:20%"
    ></el-input>
    <el-select class="search-typeselect" v-model="selectType" placeholder="选择用户类型" >
      <el-option label="学生" value="1"></el-option>
      <el-option label="老师" value="2"></el-option>
      <!-- <el-option label="籍贯" value="address"></el-option> -->
      <!-- <el-option label="班级" value="classes"></el-option> -->
    </el-select>
    <el-button type="primary" size="small" style="margin-left:10px" @click="spuerSearch">搜索</el-button>
    <el-button type="primary" size="small" style="margin-left:10px" @click="spuerClearvalue">重置</el-button>
    <el-button type="primary" size="small" style="margin-left:75px;width:100px" @click="out">退出登录</el-button>
  </div>
</template>
<script>
const IMITFROM = {
  name: "",
  password: "",
  newpassword: ""
};
//事件总线方法调用
import bus from "@/store/bus";
//this.$parent 可以访问到父组件 上所有的 data(){ 里的数据信息和生命周期方法，methods里的方法 }！
//也可以这样用
export default {
  data() {
    return {
      selectLabel: "id",
      searchValue: "",
      selectType : '',
    };
  },
  created() {},
  methods: {
    /* 退出登录 */
    out() {
        localStorage.removeItem("userInfo")
        this.$router.push('/login')
    },
    /**
     * 继承于父组件的搜索函数
     */
    spuerSearch() {
      const params = {
        value: this.searchValue,
        type: this.selectLabel,
        userType: this.selectType,
        page_number: 10,
        current_page: 0
      };
      // this.$emit("search", params, true);
      this.$emit("setTableConfig", params, true);
    },
    spuerClearvalue() {
      this.searchValue='';
      this.selectLabel = 'id';
      this.selectType = '';
      const params = {
        page_number: 10,
        current_page: 0
      };
      this.$emit("clearvalue", params);
    },
    /**
     * 给父类参数赋值
     */
    getTableData(data) {
      this.$emit("getTableData", data);
    },

    //警告提示
    warnAlter(v) {
      this.$message({
        message: v,
        type: "warning"
      });
    }
  }
};
</script>


<style scoped lang="scss">
@import "./index.scss";
</style>
