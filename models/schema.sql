DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;
USE exampledb;

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `department` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`id`, `username`, `password`, `department`,`email`) VALUES (1, 'test', 'test', 'test','test@test.com');

ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
 DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
