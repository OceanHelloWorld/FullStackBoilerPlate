/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/


-- create a database for grocery_list app only if it doesn't exist
CREATE DATABASE IF NOT EXISTS grocery_list;

USE grocery_list;

CREATE TABLE IF NOT EXISTS grocery_items (
  id INT(10) NOT NULL auto_increment,
  name VARCHAR(20) NOT NULL,
  quantity SMALLINT(5) NOT NULL,
  PRIMARY KEY(id)
);

-- INSERT INTO grocery_items (name, quantity) VALUES ('apples', 8);

-- create a table to store items

-- unique id, name, quantity fields

-- add a test item






