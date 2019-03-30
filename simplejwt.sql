-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.13-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for simplejwt
CREATE DATABASE IF NOT EXISTS `simplejwt` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `simplejwt`;

-- Dumping structure for table simplejwt.person
CREATE TABLE IF NOT EXISTS `person` (
  `id_person` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_person`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table simplejwt.person: ~3 rows (approximately)
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` (`id_person`, `id_user`, `name`, `gender`) VALUES
	(1, 1, 'Herudi Sahimar', 'L'),
	(2, 1, 'Sahimar', 'L'),
	(3, 1, 'Jajang', 'L');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;

-- Dumping structure for table simplejwt.user
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(300) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table simplejwt.user: ~1 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id_user`, `username`, `password`, `role`) VALUES
	(1, 'admin', '$2b$10$DB.7OnbC0bg6ee9Ne9XB0OZMY4/wyrKZYnWnhn.4NNyNVnFH7vqti', 'guest');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
