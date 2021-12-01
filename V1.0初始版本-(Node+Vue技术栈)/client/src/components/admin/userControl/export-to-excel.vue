<template>
  <el-button type="primary" @click="handleExport"> <i class="el-icon-download"></i> 导出用户</el-button>
</template>

<script>
export default {
  dat() {
    return {
      tableSource: []
    };
  },
  methods: {
    handleExport() {
      this.getExportSoure()
    },

    async getExportSoure(type) {
      let tableSource = [];
      const res = await this.$Http.get("/users/getAllUsersInfo", {
        params: {
          userType: 1
        }
      });
      if (res?.code == 200) tableSource = res?.data;
      this.tableSource = tableSource;
      this.exportToExcel(tableSource)
    },
    async exportToExcel(tableSource) {
      //excel数据导出
      require.ensure([], () => {
        const { export_json_to_excel } = require("@/utils");
        const tHeader = ["学号", "姓名", "多线程通信成绩", "IO流成绩", "类型"];
        const filterVal = [
          "id",
          "username",
          "thread_score",
          "io_score",
          "type"
        ];
        //传入用户数据
        const data = this.formatJson(filterVal, tableSource);
        export_json_to_excel(tHeader, data, "用户列表");
      });
    },
    formatJson(filterVal, jsonData) {
      console.log(jsonData,"jsonDatajsonDatajsonData")
      return jsonData?.map(v => filterVal.map(j => v[j])) || [];
    }
  }
};
</script>

<style>
</style>