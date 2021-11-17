<template>
  <div class="statisics-box">
    <RadarMap :scores="scores" :pointsof="pointsof" />
    <SuperTable />
  </div>
</template>


<script>
/* 后续拓展:
  1. 可以根据知识点切换可视化图
  2. 配置总分,可以切换
*/
import RadarMap from "./radarMap";
import SuperTable from "./thread-table/index.vue";
const GAMETYPE = {
  IO: "io_score",
  THREAD: "thread_score"
};

const maxPoints = {
  thread: 20,
  async: 10,
  judgment: 30,
  change_state: 40
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
    async getAveragePoints() {
      const res = await this.$Http.get("/scorecard/getAveragePoints", {
        params: {
          type: GAMETYPE.THREAD
        }
      });
      if (res?.code == 200) {
        const {
          thread = 0,
          async = 0,
          judgment = 0,
          change_state = 0
        } = res?.data?.[0];
        this.scores = [thread, async, judgment, change_state];
        this.pointsof = [
          maxPoints.thread - thread,
          maxPoints.async - async,
          maxPoints.judgment - judgment,
          maxPoints.change_state - change_state
        ];
      }
      console.log(res, Array.from(this.scores), "resresresres");
    }
  }
};
</script>

<style>
</style>