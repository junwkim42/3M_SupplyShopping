DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;
USE exampledb;

CREATE TABLE IF NOT EXISTS `accounts` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `department` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`username`, `password`, `department`) VALUES ('zack', 'zack', 'test');
INSERT INTO `accounts` (`username`, `password`, `department`) VALUES ('scott', 'scott', 'test');
INSERT INTO `accounts` (`username`, `password`, `department`) VALUES ('jenny', 'jenny', 'test');

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
