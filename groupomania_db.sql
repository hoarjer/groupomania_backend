-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania_dev_db
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int(9) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `is_public` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `user_id` int(9) unsigned zerofill DEFAULT NULL,
  `post_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (000000001,'ezzefzefzef',1,'2021-01-27 10:43:11','2021-01-27 10:43:23',NULL,000000001,1),(000000002,'whaaaaaaat',1,'2021-01-27 10:51:15','2021-01-27 13:40:16',NULL,000000002,1),(000000003,'dpok',1,'2021-01-27 14:16:19','2021-01-27 14:17:58',NULL,000000005,3),(000000004,'czêo^zd',1,'2021-01-27 14:17:16','2021-01-27 14:17:59',NULL,000000006,3),(000000005,'omuigp',1,'2021-01-27 15:46:11','2021-01-27 16:22:49',NULL,000000001,7),(000000006,'oieoize',0,'2021-01-27 16:34:25','2021-01-27 16:34:25','2021-01-27 19:11:49',000000001,7),(000000007,'oizenoiezouez',0,'2021-01-27 19:11:38','2021-01-27 19:11:38','2021-01-27 19:11:50',000000001,9),(000000008,'ezezfezf',1,'2021-01-27 19:12:34','2021-01-27 19:12:41',NULL,000000001,9),(000000009,'ezvzegthrth',1,'2021-01-27 19:12:50','2021-01-27 19:13:01',NULL,000000001,9),(000000010,'lùnbôqubnê',1,'2021-01-27 19:19:13','2021-01-27 19:19:55','2021-01-27 19:20:47',000000001,9),(000000011,'le super commentaire',1,'2021-01-28 23:50:22','2021-01-28 23:53:17',NULL,000000010,10),(000000012,'et oui',0,'2021-01-28 23:50:49','2021-01-28 23:50:49','2021-01-28 23:53:24',000000010,10),(000000013,'waaaaw',0,'2021-01-29 09:18:30','2021-01-29 09:18:30','2021-01-29 10:24:46',000000001,11),(000000014,'super commentaire',1,'2021-01-29 10:23:31','2021-01-29 10:25:04',NULL,000000011,12);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` text,
  `gif_url` varchar(255) NOT NULL,
  `is_public` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `user_id` int(9) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'super titre','http://localhost:3000/images/vermeer-gif.gif1611744126239.gif',1,'2021-01-27 10:42:06','2021-01-27 10:42:11',NULL,000000001),(2,'hello','http://localhost:3000/images/homer.gif1611744655949.gif',1,'2021-01-27 10:50:55','2021-01-27 11:01:45',NULL,000000002),(3,'dsc','http://localhost:3000/images/vermeer-gif.gif1611754701012.gif',1,'2021-01-27 13:38:21','2021-01-27 13:38:33',NULL,000000001),(4,'ezdz','http://localhost:3000/images/homer.gif1611756633662.gif',1,'2021-01-27 14:10:33','2021-01-27 14:11:24',NULL,000000004),(5,'ccc','http://localhost:3000/images/vermeer-gif.gif1611758250834.gif',1,'2021-01-27 14:37:30','2021-01-27 14:39:54',NULL,000000001),(6,'c','http://localhost:3000/images/homer.gif1611758281251.gif',1,'2021-01-27 14:38:01','2021-01-27 14:44:53',NULL,000000001),(7,'crazy','http://localhost:3000/images/homer.gif1611759781598.gif',1,'2021-01-27 15:03:01','2021-01-27 15:04:07',NULL,000000008),(8,'hello','http://localhost:3000/images/homer.gif1611760387488.gif',1,'2021-01-27 15:13:07','2021-01-27 19:11:16',NULL,000000001),(9,'ouiezfhôezui','http://localhost:3000/images/vermeer-gif.gif1611774658762.gif',1,'2021-01-27 19:10:58','2021-01-27 19:11:18',NULL,000000001),(10,'oùdisfozie','http://localhost:3000/images/vermeer-gif.gif1611829777564.gif',1,'2021-01-28 10:29:37','2021-01-28 10:29:43',NULL,000000001),(11,'super titre','http://localhost:3000/images/homer.gif1611877801822.gif',1,'2021-01-28 23:50:01','2021-01-28 23:52:50',NULL,000000010),(12,'let\'s go','http://localhost:3000/images/letsGo.gif1611910798797.gif',1,'2021-01-29 08:59:58','2021-01-29 09:00:07',NULL,000000001),(13,'hello','http://localhost:3000/images/friday.gif1611915787072.gif',1,'2021-01-29 10:23:07','2021-01-29 10:24:25',NULL,000000011);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(9) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `lastname` varchar(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  `img_url` varchar(255) DEFAULT NULL,
  `bio` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (000000001,'hoareau','jerome','jerome@test.com','$2b$10$dSxjrIZMfDgeSQmSl.YH8eqqJOM3Fk5ZUPUTBYiZgopOsAVgBfLZ.',1,'http://localhost:3000/images/one.png1611910370109.png','hey ho1ppp','2021-01-27 10:38:51','2021-01-29 09:17:53',NULL),(000000002,'hoareau1','jerome1','jerome1@test.com','$2b$10$NHExV.MnLpVOi2fL4WeUdO9iMHSBCr9vGZ9dpI.0nmu3FLhMmsJNW',0,'http://localhost:3000/images/tof.jpg1611754762109.jpg','efze','2021-01-27 10:45:06','2021-01-27 13:49:51','2021-01-27 13:58:28'),(000000003,'hoareau2','jerome2','jerome2@test.com','$2b$10$43Wfcie5P1UVcauu1nmZduMXfVjsglAyrNfKQgSdw51p0vPOWz.HO',0,NULL,'cdc','2021-01-27 11:12:51','2021-01-27 11:25:42','2021-01-27 14:07:29'),(000000004,'hoareau5','jerome5','jerome5@test.com','$2b$10$hR8y3kOIZX1FZK3K4dq.a.jTC6xayA5z.KOHdSkKHu6ELc4pFqSdW',0,'http://localhost:3000/images/satan.jpg1611756619514.jpg',NULL,'2021-01-27 14:09:35','2021-01-27 14:12:10','2021-01-27 14:12:22'),(000000005,'hoareau6','jerome6','jerome6@test.com','$2b$10$JinRHGtBqBk7W7v.lYVVuOGYKnhj7o/uFYJ4iq5j73fremNXSdF/2',0,'http://localhost:3000/images/tof.jpg1611756966404.jpg','hey ho1ppp','2021-01-27 14:15:41','2021-01-27 14:16:06','2021-01-27 14:18:11'),(000000006,'hoareau7','jerome7','jerome7@test.com','$2b$10$4285wdu8LP.zLD.i3DI0LOF4gxqgZWCH/OGP6uQeGvUAaoh6D4Nt.',0,NULL,NULL,'2021-01-27 14:16:51','2021-01-27 14:16:51','2021-01-27 14:19:29'),(000000007,'hoareau8','jerome8','jerome8@test.com','$2b$10$rxJaDVbnVDcNAkF4Dq2Bgu5Ez0dkZ/vpzLMTNVMsVXqtk0gASN.R2',0,NULL,NULL,'2021-01-27 14:20:50','2021-01-27 14:20:50','2021-01-27 14:22:12'),(000000008,'hoareau0','jerome0','jerome0@gmail.com','$2b$10$PvegpHYlytEBL6hFVBDFZeophQnmns/QbV0sLwXIjW/ccMzjxsQAe',0,'http://localhost:3000/images/pate-de-piment-cabris-rouge-royal-bourbon.jpg1611758842517.jpg',NULL,'2021-01-27 14:46:59','2021-01-27 14:47:22','2021-01-27 16:36:07'),(000000009,'hoar','jer','jer@test.com','$2b$10$eElF79HJxD.a07LIvqWe5eIyuTlEPBimlTUWTnRwVVQMRrWXCQlfK',0,'http://localhost:3000/images/satan.jpg1611764980056.jpg',NULL,'2021-01-27 16:25:58','2021-01-28 20:14:50','2021-01-29 10:25:52'),(000000010,'Pasquis','Anne-Sophie','anneso@test.com','$2b$10$SDJfgAThM7ti9dy0qv.8HemZyaGj2cm6iDiPOlbAboeM4Q9W9z22O',0,'http://localhost:3000/images/edit_(2).png1611877751803.png','je suis anneso','2021-01-28 23:48:16','2021-01-28 23:49:11',NULL),(000000011,'hoareau9','jerome9','jerome9@test.com','$2b$10$0A1C5faGGIVgbb7MXuaEz.rVAQ6Alk7mA.DOFJhN3lzo2sFaMS7mS',0,'http://localhost:3000/images/nine.png1611915763752.png','je suis jerome','2021-01-29 10:21:48','2021-01-29 10:22:43',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-29 13:26:06
