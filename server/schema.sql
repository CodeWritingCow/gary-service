-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'event'
-- 
-- ---

DROP TABLE IF EXISTS `event`;
		
CREATE TABLE `event` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `reviews_count` INTEGER NULL DEFAULT NULL,
  `price` DECIMAL NULL DEFAULT NULL,
  `rating` DECIMAL NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `image_url` VARCHAR(255) NULL DEFAULT NULL,
  `category` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'category'
-- 
-- ---

DROP TABLE IF EXISTS `category`;
		
CREATE TABLE `category` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `event` ADD FOREIGN KEY (category) REFERENCES `category` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `event` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `category` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `event` (`id`,`reviews_count`,`price`,`rating`,`name`,`category`) VALUES
-- ('','','','','','');
-- INSERT INTO `category` (`id`,`name`) VALUES
-- ('','');