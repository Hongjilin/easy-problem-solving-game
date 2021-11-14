<template>
<el-container  class="container"  >
  <el-aside  style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1','2']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-custom"></i>用户管理</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="1-1"> <router-link tag="a" to="/admin/userControl" class="nav-link">用户管理</router-link></el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-data-line"></i>数据统计</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="2-1"> <router-link tag="a" to="/admin/radarmap" class="nav-link">IO流知识点数据统计</router-link></el-menu-item>
          <el-menu-item index="2-2">线程通信知识点统计</el-menu-item>
        </el-menu-item-group>

  
      </el-submenu>

    </el-menu>
  </el-aside>
  <!-- 路由显示 -->
  <el-container direction="vertical">

      <section class="content" style="height: 100vh;">
        <div class="container-fluid">
          <el-row style="padding: 10px 10px">
            <el-col >
              <transition name="el-fade-in-linear" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-col>
          </el-row>
        </div>
      </section>
      </el-container>

</el-container>
</template>
<style>

/* tyle="height: 500px; border: 1px solid #eee" */
  .container{
    padding: none;
    height: 100vh;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    /* line-height: 60px; */
  }
  
  .el-aside {
    color: #333;
  }
  .nav-link{
    color: #606266;
    text-decoration:none;

  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>