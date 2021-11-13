<template>
  <div>
    <el-card style="margin-top:20px;margin-bottom: 5rem" v-if="editShow==false">
      <el-table :data="tableSource" border style="width: 100%">
        <el-table-column prop="id" label="学号"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="thread_score" sortable label="多线程通信成绩"></el-table-column>
        <el-table-column prop="io_score" sortable :sort-method="sortChange" label="IO流成绩">
          <!-- <template slot-scope="scope">
            <span>{{ !scope.row.io_score ? 0 : scope.row.io_score }}</span>
          </template> -->
        </el-table-column>
        <el-table-column prop="type" sortable label="类型">
          <template slot-scope="scope">
            <span>{{ USERTYPE[scope.row.type] }}</span>
          </template>
        </el-table-column>
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
          :current-page="tableCurrpage"
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
        <el-form-item :label = "user.type != 2 ? '学号:' : '职工号'">
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
          this.form = IMITFROM;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改"
          });
        });
    },

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