<template>
<div>
  {{testData}}
  <el-card style="margin-top:20px;margin-bottom: 5rem" v-if="editShow==false">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" sortable label="学号"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="thread_score" label="多线程通信成绩"></el-table-column>
      <el-table-column prop="io_score" label="IO流成绩"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button style="padding: 3px 0" type="text" @click="open(scope.$index, scope.row)">删除</el-button> -->
          <el-button
            style="padding: 3px 0"
            type="text"
            @click="editUser(scope.$index, scope.row)"
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
        :total="tableTotal"
      ></el-pagination>
    </div>
  </el-card>
  <el-card style="margin-top:20px" v-else-if="editShow==true">
    <el-page-header @back="goBack" content="修改用户信息"></el-page-header>
    <br />
    <el-form ref="form" v-model="form" label-width="80px" style="width:50%">
      <el-form-item label="学号:">
        {{user.id}}
        <!-- <el-input v-model="form.name" style="width:200px" :placeholder="user.id"></el-input> -->
      </el-form-item>
      <el-form-item label="姓名:">
        <el-input v-model="form.name" style="width:200px" :placeholder="user.username"></el-input>
      </el-form-item>
      <el-form-item label="新密码:">
        <el-input
          v-model="form.password"
          type="password"
          style="width:200px"
          placeholder="请输入要重置的密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码:">
        <el-input
          v-model="form.newpassword"
          type="password"
          style="width:200px"
          placeholder="再次输入重置的密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="editAffirm(user.id)">提交修改</el-button>
      </el-form-item>
    </el-form>
     
  </el-card>
</div>
</template>
<script>
const IMITFROM = {
  name: "",
  password: "",
  newpassword: ""
};
export default {
   props:['testData'],
  data() {
    return {
      form: {
        name: "",
        password: "",
        newpassword: ""
      },
      editShow: false,
      input: "",
      type1: "",
      tableTotal: 0,
      currentPage: 0,
      tableData: [],
      pageSize: 10,
      pageNo: 1,
      user: "",
      value: "姓名"
    };
  },
  created() {
    console.log(
      this.currentPage,
      this.pageSize,
      this.pageNo,
      "thisthisthisthisthisthis"
    );
    //分页
    this.getUsersInfoByType(this.currentPage, this.pageSize);
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
      this.form = IMITFROM
    },
    /**
     * 管理员更改用户信息
     * */
    async updata(uid) {
      console.log(uid);
      if (!this.form.password && !this.form.newpassword && !this.form.name) {
        this.warnAlert("无任何修改");
        return;
      }
      if (this.form.password != this.form.newpassword) {
        this.warnAlert("两次密码输入不一致");
        return;
      }

      const res = await this.$Http.post("/users/editUser", {
        uid,
        password: this.form.password,
        username: this.form.name
      });
      if (res.code == 200) {
        this.editShow = false;
        this.getUsersInfoByType(this.currentPage, this.pageSize);
      }
    },
  
    /**
     * 分页获取用户信息
     * @param current_page 当前页
     * @param  page_number 每页多少
     * @param type 如果不传第三个参数,默认为1(学生)
     *  this.tableData列表 数据
     *   this.tableTotal
     */
    async getUsersInfoByType(current_page, page_number, userType = 1) {
      const res = await this.$Http.get("/users/getUsersInfoByType", {
        params: {
          page_number,
          current_page,
          userType
        }
      });
      if ((res.code = 200)) {
        this.tableData = res.data;
        this.tableTotal = res.total;
      }
    },


    //******************************  提示 **************************************** */
 
  /**
   * 修改确认提示
   */
    editAffirm(uid) {
      this.$confirm("此操作将继续, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.updata(uid);
          this.$message({
            type: "success",
            message: "修改成功!"
          });
          //修改成功后重置from表格
          this.form = IMITFROM
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改"
          });
        });
    },

    /*   onSubmit() {
                   // console.log('submit!');
               },*/
    /**
     * 当每页数量或者当前页数改变时重新获取数字
     * @param val
     */
    handleSizeChange(val) {
      this.pageSize = val;
      //当输入框等不为空搜索,否则全部分页显示
      if (this.input && this.value) {
        // this.select();
      } else {
        this.get(this.pageSize, this.pageNo);
      }
    },
    handleCurrentChange(val) {
      this.pageNo = val;
      // console.log(`当前页: ${val}`);
      //分页
      if (this.input && this.value) {
        // this.select();
      } else {
        this.get(this.pageSize, this.pageNo);
      }
    },
    //警告提示
    warnAlert(v) {
      this.$message({
        message: v,
        type: "warning"
      });
    }
  }
};
</script>