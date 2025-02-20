show databases;
use kurly;
use hrdb2019;
show tables;
select * from kurly_product;
select * from kurly_member;

CREATE DATABASE  IF NOT EXISTS `kurly` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kurly`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


--
-- Table structure for table `kurly_product`
--
DROP TABLE IF EXISTS `department`;
DROP TABLE IF EXISTS `kurly_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kurly_product` (
  `pid` 		int 		 	auto_increment,
  `brend` 		varchar(20)		not null,
  `cate_depth1` char(3) 		not null,
  `cate_depth2` char(3) 		not null,
  `sub_desc` 	varchar(100)	not null,
  `price` 		int				not null,
  `dc` 			int,
  `event_label` boolean,
  `upload_img` 	varchar(100),
  `org_img` 	varchar(50),
  `detail_imgs` 	json,
  `detail_org_imgs` json, 
  `pdate` 			datetime, 
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;




















