/*
Navicat MySQL Data Transfer

Source Server         : local ris
Source Server Version : 100411
Source Host           : localhost:3306
Source Database       : jojorestful_api

Target Server Type    : MYSQL
Target Server Version : 100411
File Encoding         : 65001

Date: 2020-12-08 18:20:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for folder
-- ----------------------------
DROP TABLE IF EXISTS `folder`;
CREATE TABLE `folder` (
  `root_id` int(2) NOT NULL AUTO_INCREMENT,
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `is_public` varchar(255) DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `share` varchar(255) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `company_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`root_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of folder
-- ----------------------------
INSERT INTO `folder` VALUES ('1', '82b07a6f-60cc-4403-8fd2-329ef0de045d', 'Document Job desc Tech', 'document', null, '1231', '[123,232,4333]', '0000-00-00 00:00:00', '23');
INSERT INTO `folder` VALUES ('2', '82b07a6f-60cc-4403-8fd2-329ef0de045d', 'Folder hrd', 'folder', 'true', '1231', '[123,232,4333]', '0000-00-00 00:00:00', '23');
INSERT INTO `folder` VALUES ('3', '82b07a6f-60cc-4403-8fd2-329ef0de0d3d', 'Folder Tech', 'folder', 'true', '1231', '[123,232,4333]', '0000-00-00 00:00:00', '23');
INSERT INTO `folder` VALUES ('4', '25', 'doc 25 Update', 'document', 'true', '23', '[123,232,4333]', '2020-12-08 17:24:09', '23');
INSERT INTO `folder` VALUES ('5', 'cobaajasigan', 'coba aja', 'document', 'true', '23', '[123,232,4333]', null, '23');
INSERT INTO `folder` VALUES ('6', 'cobaajasigancoi', 'coba aja', 'document', 'true', '23', '[123,232,4333]', null, '23');
