Create database smileshop; 

use smileshop;

DROP TABLE IF EXISTS `clientes`;

CREATE TABLE IF NOT EXISTS `clientes`(
	`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` varchar(60) NOT NULL,
	`mail` varchar(100) NOT NULL,
	`phone` varchar(12) NOT NULL,
	`notification` boolean NOT NULL
);