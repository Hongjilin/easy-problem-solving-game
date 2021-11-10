CREATE DATABASE  IF NOT EXISTS `io_server` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `io_server`;
-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: io_server
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `io_points`
--

DROP TABLE IF EXISTS `io_points`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `io_points` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '关联的用户id',
  `array` int(11) DEFAULT '0' COMMENT '数组相关知识点得分',
  `keyboard` int(11) DEFAULT '0' COMMENT '键盘输入相关知识点得分',
  `methodcall` int(11) DEFAULT '0' COMMENT '方法的调用相关知识点',
  `io_stream` int(11) DEFAULT '0' COMMENT '输入输出流',
  `rw_object` int(11) DEFAULT '0' COMMENT '读写对象',
  `conversion` int(11) DEFAULT '0' COMMENT '对象类型转换',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT=' IO 知识点情况表 (io_points)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `io_points`
--

LOCK TABLES `io_points` WRITE;
/*!40000 ALTER TABLE `io_points` DISABLE KEYS */;
INSERT INTO `io_points` VALUES (1,1701130050,10,20,10,10,10,10),(2,1701130082,11,22,11,11,11,11);
/*!40000 ALTER TABLE `io_points` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `io_scorecard`
--

DROP TABLE IF EXISTS `io_scorecard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `io_scorecard` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '成绩主键,自增',
  `uid` int(11) NOT NULL COMMENT '成绩关联的用户',
  `username` varchar(45) DEFAULT NULL,
  `io_score` int(11) DEFAULT '0' COMMENT '某用户的IO流答题闯关游戏最高成绩',
  `elapsed` int(11) DEFAULT '0' COMMENT '记录时间 : 消耗的秒数',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='IO分数表 ( io_scorecard ): 存放用户最高分以及用时,主要用作排行榜数据获取';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `io_scorecard`
--

LOCK TABLES `io_scorecard` WRITE;
/*!40000 ALTER TABLE `io_scorecard` DISABLE KEYS */;
INSERT INTO `io_scorecard` VALUES (1,1701130050,'努力学习的汪',0,120),(2,1701130082,'尧',0,220),(3,1701130051,'攀',0,500);
/*!40000 ALTER TABLE `io_scorecard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thread_points`
--

DROP TABLE IF EXISTS `thread_points`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `thread_points` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增',
  `uid` int(11) NOT NULL COMMENT '关联的用户id',
  `thread` int(11) DEFAULT '0' COMMENT '线程相关类',
  `async` int(11) DEFAULT '0' COMMENT '同步',
  `judgment` int(11) DEFAULT '0' COMMENT '逻辑判断',
  `change_state` int(11) DEFAULT '0' COMMENT '更改线程状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='线程知识点分数表 (thread_points): 用作统计数据';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thread_points`
--

LOCK TABLES `thread_points` WRITE;
/*!40000 ALTER TABLE `thread_points` DISABLE KEYS */;
INSERT INTO `thread_points` VALUES (1,1701130050,11,11,11,11),(2,1701130082,22,22,22,22);
/*!40000 ALTER TABLE `thread_points` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thread_scorecard`
--

DROP TABLE IF EXISTS `thread_scorecard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `thread_scorecard` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID,自增',
  `uid` int(11) NOT NULL COMMENT '成绩关联的用户',
  `username` varchar(45) DEFAULT NULL COMMENT '用户名',
  `thread_score` int(11) DEFAULT '0' COMMENT '某用户的多线程通信答题闯关游戏最高成绩',
  `elapsed` int(11) DEFAULT '0' COMMENT '记录时间:消耗的秒数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='线程通信分数表 ( thread_score): 主要做线程通信游戏分数排行榜';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thread_scorecard`
--

LOCK TABLES `thread_scorecard` WRITE;
/*!40000 ALTER TABLE `thread_scorecard` DISABLE KEYS */;
INSERT INTO `thread_scorecard` VALUES (1,1701130050,'努力学习的汪',88,200),(2,1701130082,'尧',66,500);
/*!40000 ALTER TABLE `thread_scorecard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1701130050,'努力学习的汪','123456'),(1701130051,'攀','123456'),(1701130082,'尧','123456');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-10 11:51:07
