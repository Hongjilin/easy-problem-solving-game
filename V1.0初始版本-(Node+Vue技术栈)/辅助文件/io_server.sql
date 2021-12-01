/*
Navicat MySQL Data Transfer

Source Server         : game
Source Server Version : 50730
Source Host           : localhost:3306
Source Database       : io_server

Target Server Type    : MYSQL
Target Server Version : 50730
File Encoding         : 65001

Date: 2021-11-28 18:11:03
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COMMENT=' IO 知识点情况表 (io_points)';

-- ----------------------------
-- Records of io_points
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='IO分数表 ( io_scorecard ): 存放用户最高分以及用时,主要用作排行榜数据获取';

-- ----------------------------
-- Records of io_scorecard
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='线程知识点分数表 (thread_points): 用作统计数据';

-- ----------------------------
-- Records of thread_points
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='线程通信分数表 ( thread_score): 主要做线程通信游戏分数排行榜';

-- ----------------------------
-- Records of thread_scorecard
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(225) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `type` int(11) DEFAULT '1' COMMENT '1:学生;  2:教师 (不传默认为学生)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin', 'admin', 'admin', '3');
