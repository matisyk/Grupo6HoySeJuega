-- MySQL Script generated by MySQL Workbench
-- Sat Jul  9 19:53:48 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema hoy_se_juega
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `hoy_se_juega` ;

-- -----------------------------------------------------
-- Schema hoy_se_juega
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hoy_se_juega` DEFAULT CHARACTER SET utf8 ;
USE `hoy_se_juega` ;

-- -----------------------------------------------------
-- Table `hoy_se_juega`.`canchas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`canchas` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`canchas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idetentificacion` VARCHAR(45) NOT NULL,
  `capacidad` INT NOT NULL,
  `valor` INT NOT NULL,
  `users_owners_id` INT NOT NULL,
  `deporte_id` INT NOT NULL,
  `tipo_de_cancha_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_owners_id`, `deporte_id`, `tipo_de_cancha_id`),
  INDEX `fk_canchas_users_owners1_idx` (`users_owners_id` ASC),
  INDEX `fk_canchas_deporte1_idx` (`deporte_id` ASC),
  INDEX `fk_canchas_tipo_de_cancha1_idx` (`tipo_de_cancha_id` ASC),
  CONSTRAINT `fk_canchas_users_owners1`
    FOREIGN KEY (`users_owners_id`)
    REFERENCES `hoy_se_juega`.`users_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_canchas_deporte1`
    FOREIGN KEY (`deporte_id`)
    REFERENCES `hoy_se_juega`.`deporte` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_canchas_tipo_de_cancha1`
    FOREIGN KEY (`tipo_de_cancha_id`)
    REFERENCES `hoy_se_juega`.`tipo_de_cancha` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`canchas_horarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`canchas_horarios` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`canchas_horarios` (
  `canchas_id` INT NOT NULL,
  `horas_owners_id` INT NOT NULL,
  `dias_owners_id` INT NOT NULL,
  PRIMARY KEY (`canchas_id`, `horas_owners_id`, `dias_owners_id`),
  INDEX `fk_canchas_has_horas_owners_horas_owners1_idx` (`horas_owners_id` ASC),
  INDEX `fk_canchas_has_horas_owners_canchas1_idx` (`canchas_id` ASC),
  INDEX `fk_canchas_has_horas_owners_dias_owners1_idx` (`dias_owners_id` ASC),
  CONSTRAINT `fk_canchas_has_horas_owners_canchas1`
    FOREIGN KEY (`canchas_id`)
    REFERENCES `hoy_se_juega`.`canchas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_canchas_has_horas_owners_horas_owners1`
    FOREIGN KEY (`horas_owners_id`)
    REFERENCES `hoy_se_juega`.`horas_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_canchas_has_horas_owners_dias_owners1`
    FOREIGN KEY (`dias_owners_id`)
    REFERENCES `hoy_se_juega`.`dias_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`categorias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`categorias` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NOT NULL,
  `deportes_id` INT NOT NULL,
  PRIMARY KEY (`id`, `deportes_id`),
  INDEX `fk_categorias_deportes1_idx` (`deportes_id` ASC),
  CONSTRAINT `fk_categorias_deportes1`
    FOREIGN KEY (`deportes_id`)
    REFERENCES `hoy_se_juega`.`deportes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`deporte`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`deporte` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`deporte` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `deporte` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`deportes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`deportes` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`deportes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `deporte` VARCHAR(45) NOT NULL,
  `active` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`deportes_users_player`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`deportes_users_player` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`deportes_users_player` (
  `deportes_id` INT NOT NULL,
  `user_players_id` INT NOT NULL,
  PRIMARY KEY (`deportes_id`, `user_players_id`),
  INDEX `fk_deportes_has_user_players_user_players1_idx` (`user_players_id` ASC),
  INDEX `fk_deportes_has_user_players_deportes1_idx` (`deportes_id` ASC),
  CONSTRAINT `fk_deportes_has_user_players_deportes1`
    FOREIGN KEY (`deportes_id`)
    REFERENCES `hoy_se_juega`.`deportes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_deportes_has_user_players_user_players1`
    FOREIGN KEY (`user_players_id`)
    REFERENCES `hoy_se_juega`.`users_players` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`detalle_lugar_owners`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`detalle_lugar_owners` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`detalle_lugar_owners` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `iluminacion` TINYINT(2) NOT NULL,
  `estacionamiento` TINYINT(2) NOT NULL,
  `wifi` TINYINT(2) NOT NULL,
  `vestuario` TINYINT(2) NOT NULL,
  `ducha` TINYINT(2) NOT NULL,
  `parrilla` TINYINT(2) NOT NULL,
  `quincho` TINYINT(2) NOT NULL,
  `quiosco` TINYINT(2) NOT NULL,
  `users_owners_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_owners_id`),
  INDEX `fk_detalle_lugar_owners_users_owners1_idx` (`users_owners_id` ASC),
  CONSTRAINT `fk_detalle_lugar_owners_users_owners1`
    FOREIGN KEY (`users_owners_id`)
    REFERENCES `hoy_se_juega`.`users_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`dias_horarios_users_players`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`dias_horarios_users_players` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`dias_horarios_users_players` (
  `dias_players_id` INT NOT NULL,
  `horas_players_id` INT NOT NULL,
  `user_players_id` INT NOT NULL,
  PRIMARY KEY (`dias_players_id`, `horas_players_id`, `user_players_id`),
  INDEX `fk_dias_players_has_horas_players_horas_players1_idx` (`horas_players_id` ASC),
  INDEX `fk_dias_players_has_horas_players_dias_players1_idx` (`dias_players_id` ASC),
  INDEX `fk_dias_players_has_horas_players_user_players1_idx` (`user_players_id` ASC),
  CONSTRAINT `fk_dias_players_has_horas_players_dias_players1`
    FOREIGN KEY (`dias_players_id`)
    REFERENCES `hoy_se_juega`.`dias_players` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_dias_players_has_horas_players_horas_players1`
    FOREIGN KEY (`horas_players_id`)
    REFERENCES `hoy_se_juega`.`horas_players` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_dias_players_has_horas_players_user_players1`
    FOREIGN KEY (`user_players_id`)
    REFERENCES `hoy_se_juega`.`users_players` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`dias_owners`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`dias_owners` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`dias_owners` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`dias_players`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`dias_players` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`dias_players` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`escuelitas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`escuelitas` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`escuelitas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `deporte_id` INT NOT NULL,
  `identificacion_cancha` VARCHAR(45) NOT NULL,
  `genero_id` INT NOT NULL,
  `valor` INT NOT NULL,
  PRIMARY KEY (`id`, `deporte_id`, `genero_id`),
  INDEX `fk_escuelitas_deporte1_idx` (`deporte_id` ASC),
  INDEX `fk_escuelitas_genero1_idx` (`genero_id` ASC),
  CONSTRAINT `fk_escuelitas_deporte1`
    FOREIGN KEY (`deporte_id`)
    REFERENCES `hoy_se_juega`.`deporte` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_escuelitas_genero1`
    FOREIGN KEY (`genero_id`)
    REFERENCES `hoy_se_juega`.`genero` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`escuelitas_horarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`escuelitas_horarios` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`escuelitas_horarios` (
  `escuelitas_id` INT NOT NULL,
  `horas_owners_id` INT NOT NULL,
  `dias_owners_id` INT NOT NULL,
  PRIMARY KEY (`escuelitas_id`, `horas_owners_id`, `dias_owners_id`),
  INDEX `fk_escuelitas_has_horas_owners_horas_owners1_idx` (`horas_owners_id` ASC),
  INDEX `fk_escuelitas_has_horas_owners_escuelitas1_idx` (`escuelitas_id` ASC),
  INDEX `fk_escuelitas_has_horas_owners_dias_owners1_idx` (`dias_owners_id` ASC),
  CONSTRAINT `fk_escuelitas_has_horas_owners_escuelitas1`
    FOREIGN KEY (`escuelitas_id`)
    REFERENCES `hoy_se_juega`.`escuelitas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_escuelitas_has_horas_owners_horas_owners1`
    FOREIGN KEY (`horas_owners_id`)
    REFERENCES `hoy_se_juega`.`horas_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_escuelitas_has_horas_owners_dias_owners1`
    FOREIGN KEY (`dias_owners_id`)
    REFERENCES `hoy_se_juega`.`dias_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`genero`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`genero` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`genero` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `genero` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`horas_owners`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`horas_owners` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`horas_owners` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hora` INT(24) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`horas_players`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`horas_players` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`horas_players` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hora` INT(24) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`imagen_canchas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`imagen_canchas` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`imagen_canchas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `link` VARCHAR(100) NOT NULL,
  `canchas_id` INT NOT NULL,
  PRIMARY KEY (`id`, `canchas_id`),
  INDEX `fk_imagen_canchas_canchas1_idx` (`canchas_id` ASC),
  CONSTRAINT `fk_imagen_canchas_canchas1`
    FOREIGN KEY (`canchas_id`)
    REFERENCES `hoy_se_juega`.`canchas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`imagen_escuelitas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`imagen_escuelitas` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`imagen_escuelitas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `link` VARCHAR(100) NOT NULL,
  `escuelitas_id` INT NOT NULL,
  PRIMARY KEY (`id`, `escuelitas_id`),
  INDEX `fk_imagen_escuelitas_escuelitas1_idx` (`escuelitas_id` ASC),
  CONSTRAINT `fk_imagen_escuelitas_escuelitas1`
    FOREIGN KEY (`escuelitas_id`)
    REFERENCES `hoy_se_juega`.`escuelitas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`imagenes_owners`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`imagenes_owners` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`imagenes_owners` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(100) NOT NULL,
  `users_owners_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_owners_id`),
  INDEX `fk_imagenes_owners_users_owners1_idx` (`users_owners_id` ASC),
  CONSTRAINT `fk_imagenes_owners_users_owners1`
    FOREIGN KEY (`users_owners_id`)
    REFERENCES `hoy_se_juega`.`users_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`imagenes_players`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`imagenes_players` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`imagenes_players` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `link` VARCHAR(45) NOT NULL,
  `user_players_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_players_id`),
  INDEX `fk_imagenes_players_user_players1_idx` (`user_players_id` ASC),
  CONSTRAINT `fk_imagenes_players_user_players1`
    FOREIGN KEY (`user_players_id`)
    REFERENCES `hoy_se_juega`.`users_players` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`imagen_torneos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`imagen_torneos` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`imagen_torneos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `link` VARCHAR(100) NOT NULL,
  `torneos_id` INT NOT NULL,
  PRIMARY KEY (`id`, `torneos_id`),
  INDEX `fk_imagen_escuelitas_copy1_torneos1_idx` (`torneos_id` ASC),
  CONSTRAINT `fk_imagen_escuelitas_copy1_torneos1`
    FOREIGN KEY (`torneos_id`)
    REFERENCES `hoy_se_juega`.`torneos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`logo_owners`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`logo_owners` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`logo_owners` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `logo` VARCHAR(100) NOT NULL,
  `users_owners_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_owners_id`),
  INDEX `fk_logo_owners_users_owners1_idx` (`users_owners_id` ASC),
  CONSTRAINT `fk_logo_owners_users_owners1`
    FOREIGN KEY (`users_owners_id`)
    REFERENCES `hoy_se_juega`.`users_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`medios_de_pago`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`medios_de_pago` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`medios_de_pago` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `transferencia` TINYINT(2) NOT NULL,
  `mercado_pago` TINYINT(2) NOT NULL,
  `efectivo` TINYINT(2) NOT NULL,
  `tarjeta` TINYINT(2) NOT NULL,
  `users_owners_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_owners_id`),
  INDEX `fk_medios_de_pago_users_owners1_idx` (`users_owners_id` ASC),
  CONSTRAINT `fk_medios_de_pago_users_owners1`
    FOREIGN KEY (`users_owners_id`)
    REFERENCES `hoy_se_juega`.`users_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`profesor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`profesor` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`profesor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`profesores_escuelitas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`profesores_escuelitas` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`profesores_escuelitas` (
  `profesor_id` INT NOT NULL,
  `escuelitas_id` INT NOT NULL,
  `escuelitas_deporte_id` INT NOT NULL,
  `escuelitas_genero_id` INT NOT NULL,
  PRIMARY KEY (`profesor_id`, `escuelitas_id`, `escuelitas_deporte_id`, `escuelitas_genero_id`),
  INDEX `fk_profesor_has_escuelitas_escuelitas1_idx` (`escuelitas_id` ASC, `escuelitas_deporte_id` ASC, `escuelitas_genero_id` ASC),
  INDEX `fk_profesor_has_escuelitas_profesor1_idx` (`profesor_id` ASC),
  CONSTRAINT `fk_profesor_has_escuelitas_profesor1`
    FOREIGN KEY (`profesor_id`)
    REFERENCES `hoy_se_juega`.`profesor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profesor_has_escuelitas_escuelitas1`
    FOREIGN KEY (`escuelitas_id` , `escuelitas_deporte_id` , `escuelitas_genero_id`)
    REFERENCES `hoy_se_juega`.`escuelitas` (`id` , `deporte_id` , `genero_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`telefonos_owners`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`telefonos_owners` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`telefonos_owners` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `telefono` INT NOT NULL,
  `users_owners_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_owners_id`),
  INDEX `fk_telefonos_owners_users_owners1_idx` (`users_owners_id` ASC),
  CONSTRAINT `fk_telefonos_owners_users_owners1`
    FOREIGN KEY (`users_owners_id`)
    REFERENCES `hoy_se_juega`.`users_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`telefonos_players`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`telefonos_players` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`telefonos_players` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `telefono` INT NOT NULL,
  `user_player_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_player_id`),
  INDEX `fk_telefono_owner_user_player_idx` (`user_player_id` ASC),
  CONSTRAINT `fk_telefono_owner_user_player`
    FOREIGN KEY (`user_player_id`)
    REFERENCES `hoy_se_juega`.`users_players` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`tipo_de_cancha`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`tipo_de_cancha` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`tipo_de_cancha` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `material` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`torneos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`torneos` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`torneos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `deporte_id` INT NOT NULL,
  `genero_id` INT NOT NULL,
  `cantidad_equipos` INT NOT NULL,
  `categoria` INT NOT NULL,
  `fecha_inicio` DATE NOT NULL,
  `fecha_fin` DATE NOT NULL,
  `valor` INT NOT NULL,
  `premio` INT NOT NULL,
  PRIMARY KEY (`id`, `deporte_id`, `genero_id`),
  INDEX `fk_torneos_deporte1_idx` (`deporte_id` ASC),
  INDEX `fk_torneos_genero1_idx` (`genero_id` ASC),
  CONSTRAINT `fk_torneos_deporte1`
    FOREIGN KEY (`deporte_id`)
    REFERENCES `hoy_se_juega`.`deporte` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_torneos_genero1`
    FOREIGN KEY (`genero_id`)
    REFERENCES `hoy_se_juega`.`genero` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`torneos_horarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`torneos_horarios` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`torneos_horarios` (
  `torneos_id` INT NOT NULL,
  `horas_owners_id` INT NOT NULL,
  `dias_owners_id` INT NOT NULL,
  PRIMARY KEY (`torneos_id`, `horas_owners_id`, `dias_owners_id`),
  INDEX `fk_torneos_has_horas_owners_horas_owners1_idx` (`horas_owners_id` ASC),
  INDEX `fk_torneos_has_horas_owners_torneos1_idx` (`torneos_id` ASC),
  INDEX `fk_torneos_has_horas_owners_dias_owners1_idx` (`dias_owners_id` ASC),
  CONSTRAINT `fk_torneos_has_horas_owners_torneos1`
    FOREIGN KEY (`torneos_id`)
    REFERENCES `hoy_se_juega`.`torneos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_torneos_has_horas_owners_horas_owners1`
    FOREIGN KEY (`horas_owners_id`)
    REFERENCES `hoy_se_juega`.`horas_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_torneos_has_horas_owners_dias_owners1`
    FOREIGN KEY (`dias_owners_id`)
    REFERENCES `hoy_se_juega`.`dias_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`ubicacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`ubicacion` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`ubicacion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `provincia` VARCHAR(45) NOT NULL,
  `localidad` VARCHAR(45) NOT NULL,
  `municipio` VARCHAR(45) NOT NULL,
  `calle` VARCHAR(45) NOT NULL,
  `numeracion` INT NOT NULL,
  `users_owners_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_owners_id`),
  INDEX `fk_ubicacion_users_owners1_idx` (`users_owners_id` ASC),
  CONSTRAINT `fk_ubicacion_users_owners1`
    FOREIGN KEY (`users_owners_id`)
    REFERENCES `hoy_se_juega`.`users_owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`users_owners`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`users_owners` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`users_owners` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `nombre_del_lugar` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`users_players`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`users_players` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`users_players` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `edad` DATE NOT NULL,
  `zonas_de_juego_id` INT NOT NULL,
  PRIMARY KEY (`id`, `zonas_de_juego_id`),
  INDEX `fk_user_players_zonas_de_juego1_idx` (`zonas_de_juego_id` ASC),
  CONSTRAINT `fk_user_players_zonas_de_juego1`
    FOREIGN KEY (`zonas_de_juego_id`)
    REFERENCES `hoy_se_juega`.`zonas_de_juego` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoy_se_juega`.`zonas_de_juego`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hoy_se_juega`.`zonas_de_juego` ;

CREATE TABLE IF NOT EXISTS `hoy_se_juega`.`zonas_de_juego` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `provincia` VARCHAR(45) NOT NULL,
  `localidad` VARCHAR(45) NOT NULL,
  `municipio` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
