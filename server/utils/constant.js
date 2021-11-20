const GAMETYPE = {
  IO:'io_score', //游戏类型 : IO游戏
  THREAD:'thread_score' // 线程游戏
}
//表名常量
const TABLENAME = {
  IO_POINTS:'io_points',//IO详细知识点表
  THREAD_POINTS:'thread_points', //thread线程详细知识点表
  IO_SCORECARD:'io_scorecard', //IO计分板
  THREAD_SCORECARD:'thread_scorecard'//线程计分板
}
const USERTYPE={
  TEACHER:'教师',
  TEACHER1:'老师',
  STUDENT :'学生'
}


module.exports = {
  GAMETYPE,
  TABLENAME,
  USERTYPE
};
