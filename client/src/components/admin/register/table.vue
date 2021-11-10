<template>
  <el-card style="margin-top:20px;margin-bottom: 5rem" v-if="show1==false">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" sortable label="学号/工号"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="thread_score" label="多线程通信成绩"></el-table-column>
      <el-table-column prop="io_score" label="IO流成绩"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button style="padding: 3px 0" type="text" @click="open(scope.$index, scope.row)">删除</el-button> -->
          <el-button style="padding: 3px 0" type="text" @click="cshow(scope.$index, scope.row)">编辑</el-button>
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
  <el-card style="margin-top:20px" v-else-if="show1==true">
    <el-page-header @back="goBack" content="详情页面"></el-page-header>
    <br />
    <el-form ref="form" v-model="form" label-width="80px" style="width:50%">
      <el-form-item label="姓名">
        <el-input v-model="form.name" style="width:40%" :placeholder="user.username"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input v-model="form.address" style="width:40%" :placeholder="user.address"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="form.type">
          <el-radio label="教师"></el-radio>
          <el-radio label="学生"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updata">提交修改</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        sex: "",
        address: "",
        type: ""
      },
      show1: false,
      input: "",
      type1: "",
      UserSize: 0,
      currentPage: 1,
      tableData: [],
      pageSize: 10,
      pageNo: 1,
      user: "",
      value: "姓名"
    };
  },
  created() {
    //分页
    this.getUsersInfoByType(this.pageSize, this.pageNo);
  },
  methods: {
    /**
             * 管理员更改用户信息
             *   u_id:this.user.id,
             username:this.form.name,
             sex:this.form.sex,
             address:this.form.address,
             type:this.type1
             this.show1--隐藏页面
             * */
    updata() {
      if (
        !this.form.name ||
        !this.form.sex ||
        !this.form.address ||
        !this.form.type
      ) {
        this.open3("不可为空");
      } else {
        if (this.form.type == "学生") this.type1 = 2;
        if (this.form.type == "教师") this.type1 = 3;
        // this.$axiosjwt({
        //   url: "/users/upUserdata",
        //   method: "post",
        //   data: {
        //     u_id: this.user.id,
        //     username: this.form.name,
        //     sex: this.form.sex,
        //     address: this.form.address,
        //     type: this.type1
        //   },
        //   success: result => {
        //     this.open2(result);
        //     this.show1 = false;
        //     this.get(this.pageSize, this.pageNo);
        //   }
        // });
      }
    },
    /**
     * 分页搜索用户信息
     * ,输入内容
     * this.value,搜素类型
     * 页码大小
     * this.pageNo 当前页数
     * this.tableData列表数据
     *   this.UserSize列表数量
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
        //     this.UserSize = result.total;
        //   }
        // });
      }
    },
    /**
     * 分页获取用户信息
     * @param pageNum
     * @param currPage
     * @param type 如果不传第三个参数,默认为1(学生)
     *  this.tableData列表 数据
     *   this.UserSize列表数量
     */
    async getUsersInfoByType(page_number, current_page, userType = 1) {
      const res = await this.$Http.get("/users/getUsersInfoByType", {
        page_number,
        current_page,
        userType
      });

      // this.$axiosjwt({
      //   url: "/users/getUsersByTypePage",
      //   method: "get",
      //   data: {
      //     type: 3,
      //     pageNum: pageNum,
      //     currPage: currPage - 1
      //   },
      //   success: result => {
      //     this.tableData = result.data;
      //     this.UserSize = result.total;
      //   }
      // });
    },
    /**
     * 删除用户
     * */
    del(index, row) {
      // this.$axiosjwt({
      //   url: "/users/delUserdata",
      //   method: "get",
      //   data: {
      //     u_id: row.id
      //   },
      //   success: result => {
      //     console.log(this.pageNum);
      //     console.log(this.currPage);
      //     this.get(this.pageSize, this.pageNo);
      //   }
      // });
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
        this.select();
      } else {
        this.get(this.pageSize, this.pageNo);
      }
    },
    handleCurrentChange(val) {
      this.pageNo = val;
      // console.log(`当前页: ${val}`);
      //分页
      if (this.input && this.value) {
        this.select();
      } else {
        this.get(this.pageSize, this.pageNo);
      }
    }
  }
};
</script>