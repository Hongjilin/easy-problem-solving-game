<template>
  <div class="statisics-box">
    <RadarMap />
    <SuperTable />
  </div>
</template>


<script>
/* 后续拓展:
  1. 可以根据知识点切换可视化图
  2. 配置总分,可以切换
*/
import RadarMap from "./radarMap";
import SuperTable from "./io-table/index.vue";

export default {
  components: { RadarMap, SuperTable }
};
</script>

<style>
</style>