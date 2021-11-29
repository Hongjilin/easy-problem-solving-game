<template>
  <div class="statisics-box">
    <RadarMap :scores="scores" :pointsof="pointsof" />
    <SuperTable @getAveragePoints="getAveragePoints" />
  </div>
</template>


<script>
/* 后续拓展:
  1. 可以根据知识点切换可视化图
  2. 配置总分,可以切换
*/
import RadarMap from "./radarMap";
import SuperTable from "./io-table/index.vue";
const GAMETYPE = {
  IO: "io_score",
  THREAD: "thread_score"
};
const maxPoints = {
  array: 10,
  keyboard: 30,
  methodcall: 10,
  io_stream: 20,
  rw_object: 20,
  conversion: 10
};
export default {
  components: { RadarMap, SuperTable },
  data() {
    return {
      scores: [],
      pointsof: []
    };
  },
  created() {
    this.getAveragePoints();
  },
  methods: {
    async getAveragePoints(uid) {
      const res = await this.$Http.get("/scorecard/getAveragePoints", {
        params: {
          type: GAMETYPE.IO,
          uid
        }
      });
      if (res?.code == 200) {
        const {
          array = 0,
          keyboard = 0,
          methodcall = 0,
          io_stream = 0,
          rw_object = 0,
          conversion = 0
        } = res?.data?.[0];
        this.scores = [
          array.toFixed(1),
          keyboard.toFixed(1),
          methodcall.toFixed(1),
          io_stream.toFixed(1),
          rw_object.toFixed(1),
          conversion.toFixed(1)
        ];
        this.pointsof = [
          maxPoints.array - array.toFixed(1),
          maxPoints.keyboard - keyboard.toFixed(1),
          maxPoints.methodcall - methodcall.toFixed(1),
          maxPoints.io_stream - io_stream.toFixed(1),
          maxPoints.rw_object - rw_object.toFixed(1),
          maxPoints.conversion - conversion.toFixed(1)
        ];
      }
    }
  }
};
</script>

<style>
</style>