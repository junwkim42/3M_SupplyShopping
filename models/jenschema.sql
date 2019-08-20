DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

CREATE TABLE supplies
(
	id int NOT NULL AUTO_INCREMENT,
	supply varchar(255) NOT NULL,
	PRIMARY KEY (id)
);