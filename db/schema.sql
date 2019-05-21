DROP DATABASE IF EXISTS subs_db;

CREATE DATABASE subs_db;

USE subs_db;

CREATE TABLE subs (
    id INT NOT NULL AUTO_INCREMENT,
    sub_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);