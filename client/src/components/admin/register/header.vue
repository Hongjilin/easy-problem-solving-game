<template>
  <el-card>
    <el-select v-model="value" placeholder="请选择查询字段" style="width: 15%">
      <el-option label="学号" value="id"></el-option>
      <el-option label="姓名" value="username"></el-option>
      <!-- <el-option label="籍贯" value="address"></el-option> -->
      <!-- <el-option label="班级" value="classes"></el-option> -->
    </el-select>
    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input" style="width:20%"></el-input>
    <el-button type="primary" size="small" style="margin-left:10px" @click="getTableData">搜索</el-button>
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
    return {};
  },
  created() {
    // bus.$on("getTableData", data => {
    //   this.dataFromBrother = data;
    // });
  },
  methods: {
    getTableData() {
      this.$emit("getTableData", ['xxxxxxxxxxx','data']);

    }
  }
};
</script>