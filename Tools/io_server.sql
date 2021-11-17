/*
Navicat MySQL Data Transfer

Source Server         : game
Source Server Version : 50730
Source Host           : localhost:3306
Source Database       : io_server

Target Server Type    : MYSQL
Target Server Version : 50730
File Encoding         : 65001

Date: 2021-11-17 19:44:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for io_points
-- ----------------------------
DROP TABLE IF EXISTS `io_points`;
CREATE TABLE `io_points` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(45) NOT NULL COMMENT '关联的用户id',
  `array` int(11) DEFAULT '0' COMMENT '数组相关知识点得分',
  `keyboard` int(11) DEFAULT '0' COMMENT '键盘输入相关知识点得分',
  `methodcall` int(11) DEFAULT '0' COMMENT '方法的调用相关知识点',
  `io_stream` int(11) DEFAULT '0' COMMENT '输入输出流',
  `rw_object` int(11) DEFAULT '0' COMMENT '读写对象',
  `conversion` int(11) DEFAULT '0' COMMENT '对象类型转换',
  `scoring_details` varchar(45) DEFAULT NULL COMMENT '所有题目的得分详情(json字符串)',
  PRIMARY KEY (`id`,`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT=' IO 知识点情况表 (io_points)';

-- ----------------------------
-- Records of io_points
-- ----------------------------
INSERT INTO `io_points` VALUES ('1', '1701130050', '0', '0', '0', '0', '0', '0', '{}');
INSERT INTO `io_points` VALUES ('2', '1701130082', '11', '22', '11', '11', '11', '11', 'json假数据');
INSERT INTO `io_points` VALUES ('11', '1701130053', '0', '0', '0', '0', '0', '0', '{}');

-- ----------------------------
-- Table structure for io_scorecard
-- ----------------------------
DROP TABLE IF EXISTS `io_scorecard`;
CREATE TABLE `io_scorecard` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '成绩主键,自增',
  `uid` varchar(45) NOT NULL COMMENT '成绩关联的用户',
  `username` varchar(45) DEFAULT NULL,
  `io_score` int(11) DEFAULT '0' COMMENT '某用户的IO流答题闯关游戏最高成绩',
  `elapsed` int(11) NOT NULL DEFAULT '0' COMMENT '记录时间 : 消耗的秒数',
  PRIMARY KEY (`id`,`uid`),
  UNIQUE KEY `uid_UNIQUE` (`uid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='IO分数表 ( io_scorecard ): 存放用户最高分以及用时,主要用作排行榜数据获取';

-- ----------------------------
-- Records of io_scorecard
-- ----------------------------
INSERT INTO `io_scorecard` VALUES ('1', '1701130050', '努力学习的汪', '70', '120');
INSERT INTO `io_scorecard` VALUES ('2', '1701130082', '尧', '20', '220');

-- ----------------------------
-- Table structure for thread_points
-- ----------------------------
DROP TABLE IF EXISTS `thread_points`;
CREATE TABLE `thread_points` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增',
  `uid` varchar(45) NOT NULL COMMENT '关联的用户id',
  `thread` int(11) DEFAULT '0' COMMENT '线程相关类',
  `async` int(11) DEFAULT '0' COMMENT '同步',
  `judgment` int(11) DEFAULT '0' COMMENT '逻辑判断',
  `change_state` int(11) DEFAULT '0' COMMENT '更改线程状态',
  `scoring_details` varchar(45) DEFAULT NULL COMMENT '所有题目的得分详情(json字符串)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='线程知识点分数表 (thread_points): 用作统计数据';

-- ----------------------------
-- Records of thread_points
-- ----------------------------
INSERT INTO `thread_points` VALUES ('1', '1701130050', '11', '8', '25', '30', 'json假数据');
INSERT INTO `thread_points` VALUES ('2', '1701130082', '13', '6', '22', '22', 'json假数据');
INSERT INTO `thread_points` VALUES ('3', '1701130053', '0', '0', '0', '0', '{}');

-- ----------------------------
-- Table structure for thread_scorecard
-- ----------------------------
DROP TABLE IF EXISTS `thread_scorecard`;
CREATE TABLE `thread_scorecard` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID,自增',
  `uid` varchar(45) NOT NULL COMMENT '成绩关联的用户',
  `username` varchar(45) DEFAULT NULL COMMENT '用户名',
  `thread_score` int(11) DEFAULT '0' COMMENT '某用户的多线程通信答题闯关游戏最高成绩',
  `elapsed` int(11) DEFAULT '0' COMMENT '记录时间:消耗的秒数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='线程通信分数表 ( thread_score): 主要做线程通信游戏分数排行榜';

-- ----------------------------
-- Records of thread_scorecard
-- ----------------------------
INSERT INTO `thread_scorecard` VALUES ('1', '1701130050', '努力学习的汪', '88', '200');
INSERT INTO `thread_scorecard` VALUES ('2', '1701130082', '尧', '66', '500');
INSERT INTO `thread_scorecard` VALUES ('3', '1701130089', '帅哥', '88', '500');
INSERT INTO `thread_scorecard` VALUES ('4', '1701130053', '努力学习的汪', '70', '120');
INSERT INTO `thread_scorecard` VALUES ('6', '1701130053', '努力学习的汪', '70', '120');
INSERT INTO `thread_scorecard` VALUES ('7', '1701130053', '努力学习的汪', '70', '120');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `type` int(11) DEFAULT '1' COMMENT '1:学生;  2:教师 (不传默认为学生)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('100', '张飞', '123456', '1');
INSERT INTO `user` VALUES ('101', '刘备', '123456', '1');
INSERT INTO `user` VALUES ('102', '关羽', '123456', '2');
INSERT INTO `user` VALUES ('103', '马超', '123456', '1');
INSERT INTO `user` VALUES ('104', '赵云', '123456', '1');
INSERT INTO `user` VALUES ('999', '666', '123456', '1');
INSERT INTO `user` VALUES ('9899', '666', '123456', '1');
INSERT INTO `user` VALUES ('98899', '666', '123456', '1');
INSERT INTO `user` VALUES ('789789', '洪老师', '123456', '2');
INSERT INTO `user` VALUES ('7878711', '洪帅帅', '123456', '2');
INSERT INTO `user` VALUES ('170123123', '帅够', '123456', '1');
INSERT INTO `user` VALUES ('170456456', '丑铭杰', '123456', '1');
INSERT INTO `user` VALUES ('177777777', '帅狗够啊', '123456', '1');
INSERT INTO `user` VALUES ('1701130050', '读书', '1111', '1');
INSERT INTO `user` VALUES ('1701130051', '攀', '123456', '2');
INSERT INTO `user` VALUES ('1701130082', '尧', '123456', '1');
INSERT INTO `user` VALUES ('1777778777', '帅狗够啊', '123456', '1');
