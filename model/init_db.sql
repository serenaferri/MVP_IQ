--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS purchases;
SET foreign_key_checks = 1;

--
-- Create Tables
--
     
CREATE TABLE cities (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    province VARCHAR(200),
    population INT,
    trainAccess VARCHAR(200),
    language VARCHAR(200)
);



INSERT INTO cities (name, province, trainAccess, language, population) VALUES 
('Antwerp', "Antwerpen", "Antwerpen Central Railway Station", "Dutch", 530504),
('Brussels', "Region of Brussels", "There are 3 train stations", "French & Dutch", 1212352),
("Brugge", "West Flanders", "There is one train station", "Dutch", 118509),
("Dinant", "Namur", "There is one train station", "French", 13544);



