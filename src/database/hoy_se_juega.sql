-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 29-07-2022 a las 01:21:23
-- Versión del servidor: 5.7.34
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hoy_se_juega`
--
CREATE DATABASE IF NOT EXISTS `hoy_se_juega` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `hoy_se_juega`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auto_valoracion`
--

DROP TABLE IF EXISTS `auto_valoracion`;
CREATE TABLE IF NOT EXISTS `auto_valoracion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `auto_valoracion`
--

INSERT INTO `auto_valoracion` (`id`, `tipo`) VALUES
(1, 'Estrella'),
(2, 'Copadito'),
(3, 'Juego'),
(4, 'Me defiendo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canchas`
--

DROP TABLE IF EXISTS `canchas`;
CREATE TABLE IF NOT EXISTS `canchas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identificacion` varchar(45) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `valor` int(11) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  `tipo_de_cancha_id` int(11) NOT NULL,
  `deportes_players_id` int(11) NOT NULL,
  `img_c` varchar(200) NOT NULL,
  PRIMARY KEY (`id`,`users_owners_id`,`tipo_de_cancha_id`,`deportes_players_id`),
  KEY `fk_canchas_users_owners1_idx` (`users_owners_id`),
  KEY `fk_canchas_tipo_de_cancha1_idx` (`tipo_de_cancha_id`),
  KEY `fk_canchas_deportes_players1_idx` (`deportes_players_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canchas_horarios`
--

DROP TABLE IF EXISTS `canchas_horarios`;
CREATE TABLE IF NOT EXISTS `canchas_horarios` (
  `canchas_id` int(11) NOT NULL,
  `horas_owners_id` int(11) NOT NULL,
  `dias_owners_id` int(11) NOT NULL,
  PRIMARY KEY (`canchas_id`,`horas_owners_id`,`dias_owners_id`),
  KEY `fk_canchas_has_horas_owners_horas_owners1_idx` (`horas_owners_id`),
  KEY `fk_canchas_has_horas_owners_canchas1_idx` (`canchas_id`),
  KEY `fk_canchas_has_horas_owners_dias_owners1_idx` (`dias_owners_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) NOT NULL,
  `deportes_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`deportes_id`),
  KEY `fk_categorias_deportes1_idx` (`deportes_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deportes_players`
--

DROP TABLE IF EXISTS `deportes_players`;
CREATE TABLE IF NOT EXISTS `deportes_players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deporte` varchar(45) NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `deportes_players`
--

INSERT INTO `deportes_players` (`id`, `deporte`, `active`) VALUES
(1, 'Futbol', 1),
(2, 'Voley', 1),
(3, 'Basquet', 1),
(4, 'Padel', 0),
(5, 'Tenis', 1),
(6, 'No juego', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_lugar_owners`
--

DROP TABLE IF EXISTS `detalle_lugar_owners`;
CREATE TABLE IF NOT EXISTS `detalle_lugar_owners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iluminacion` varchar(2) NOT NULL,
  `estacionamiento` varchar(2) NOT NULL,
  `wifi` varchar(2) NOT NULL,
  `vestuario` varchar(2) NOT NULL,
  `ducha` varchar(2) NOT NULL,
  `parrilla` varchar(2) NOT NULL,
  `quincho` varchar(2) NOT NULL,
  `quiosco` varchar(2) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`users_owners_id`),
  KEY `fk_detalle_lugar_owners_users_owners1_idx` (`users_owners_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `detalle_lugar_owners`
--

INSERT INTO `detalle_lugar_owners` (`id`, `iluminacion`, `estacionamiento`, `wifi`, `vestuario`, `ducha`, `parrilla`, `quincho`, `quiosco`, `users_owners_id`) VALUES
(1, 'Si', 'Si', 'Si', 'Si', 'Si', 'No', 'No', 'Si', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias`
--

DROP TABLE IF EXISTS `dias`;
CREATE TABLE IF NOT EXISTS `dias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dia` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `dias`
--

INSERT INTO `dias` (`id`, `dia`) VALUES
(1, 'Lunes'),
(2, 'Martes'),
(3, 'Miércoles'),
(4, 'Jueves'),
(5, 'Viernes'),
(6, 'Sábado'),
(7, 'Domingo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias_y_horas_canchas`
--

DROP TABLE IF EXISTS `dias_y_horas_canchas`;
CREATE TABLE IF NOT EXISTS `dias_y_horas_canchas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `canchas_id` int(11) NOT NULL,
  `horas_id` int(11) NOT NULL,
  `dias_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`canchas_id`,`horas_id`,`dias_id`),
  KEY `fk_dias_y_horas_canchas_canchas1_idx` (`canchas_id`),
  KEY `fk_dias_y_horas_canchas_horas1_idx` (`horas_id`),
  KEY `fk_dias_y_horas_canchas_dias1_idx` (`dias_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias_y_horas_escuelitas`
--

DROP TABLE IF EXISTS `dias_y_horas_escuelitas`;
CREATE TABLE IF NOT EXISTS `dias_y_horas_escuelitas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `escuelitas_id` int(11) NOT NULL,
  `horas_id` int(11) NOT NULL,
  `dias_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`escuelitas_id`,`horas_id`,`dias_id`),
  KEY `fk_dias_y_horas_escuelitas_escuelitas1_idx` (`escuelitas_id`),
  KEY `fk_dias_y_horas_escuelitas_horas1_idx` (`horas_id`),
  KEY `fk_dias_y_horas_escuelitas_dias1_idx` (`dias_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias_y_horas_player`
--

DROP TABLE IF EXISTS `dias_y_horas_player`;
CREATE TABLE IF NOT EXISTS `dias_y_horas_player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dias_players_id` int(11) NOT NULL,
  `horas_players_id` int(11) NOT NULL,
  `users_players_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`dias_players_id`,`horas_players_id`,`users_players_id`),
  KEY `fk_dias_y_horas_player_dias_players1_idx` (`dias_players_id`),
  KEY `fk_dias_y_horas_player_horas_players1_idx` (`horas_players_id`),
  KEY `fk_dias_y_horas_player_users_players1_idx` (`users_players_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias_y_horas_torneos`
--

DROP TABLE IF EXISTS `dias_y_horas_torneos`;
CREATE TABLE IF NOT EXISTS `dias_y_horas_torneos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `torneos_id` int(11) NOT NULL,
  `horas_id` int(11) NOT NULL,
  `dias_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`torneos_id`,`horas_id`,`dias_id`),
  KEY `fk_dias_y_horas_toneos_torneos1_idx` (`torneos_id`),
  KEY `fk_dias_y_horas_torneos_horas1_idx` (`horas_id`),
  KEY `fk_dias_y_horas_torneos_dias1_idx` (`dias_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escuelitas`
--

DROP TABLE IF EXISTS `escuelitas`;
CREATE TABLE IF NOT EXISTS `escuelitas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deporte_id` int(11) NOT NULL,
  `genero_id` int(11) NOT NULL,
  `valor` int(11) NOT NULL,
  `canchas_id` int(11) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`deporte_id`,`genero_id`,`canchas_id`,`users_owners_id`),
  KEY `fk_escuelitas_deporte1_idx` (`deporte_id`),
  KEY `fk_escuelitas_genero1_idx` (`genero_id`),
  KEY `fk_escuelitas_canchas1_idx` (`canchas_id`),
  KEY `fk_escuelitas_users_owners1_idx` (`users_owners_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escuelitas_horarios`
--

DROP TABLE IF EXISTS `escuelitas_horarios`;
CREATE TABLE IF NOT EXISTS `escuelitas_horarios` (
  `escuelitas_id` int(11) NOT NULL,
  `horas_owners_id` int(11) NOT NULL,
  `dias_owners_id` int(11) NOT NULL,
  PRIMARY KEY (`escuelitas_id`,`horas_owners_id`,`dias_owners_id`),
  KEY `fk_escuelitas_has_horas_owners_horas_owners1_idx` (`horas_owners_id`),
  KEY `fk_escuelitas_has_horas_owners_escuelitas1_idx` (`escuelitas_id`),
  KEY `fk_escuelitas_has_horas_owners_dias_owners1_idx` (`dias_owners_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

DROP TABLE IF EXISTS `genero`;
CREATE TABLE IF NOT EXISTS `genero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genero` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horas`
--

DROP TABLE IF EXISTS `horas`;
CREATE TABLE IF NOT EXISTS `horas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hora` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `horas`
--

INSERT INTO `horas` (`id`, `hora`) VALUES
(1, '00:00:00'),
(2, '00:30:00'),
(3, '01:00:00'),
(4, '01:30:00'),
(5, '02:00:00'),
(6, '02:30:00'),
(7, '03:00:00'),
(8, '03:30:00'),
(9, '04:00:00'),
(10, '04:30:00'),
(11, '05:00:00'),
(12, '05:30:00'),
(13, '06:00:00'),
(14, '06:30:00'),
(15, '07:00:00'),
(16, '07:30:00'),
(17, '08:00:00'),
(18, '08:30:00'),
(19, '09:00:00'),
(20, '09:30:00'),
(21, '10:00:00'),
(22, '10:30:00'),
(23, '11:00:00'),
(24, '11:30:00'),
(25, '12:00:00'),
(26, '12:30:00'),
(27, '13:00:00'),
(28, '13:30:00'),
(29, '14:00:00'),
(30, '14:30:00'),
(31, '15:00:00'),
(32, '15:30:00'),
(33, '16:00:00'),
(34, '16:30:00'),
(35, '17:00:00'),
(36, '17:30:00'),
(37, '18:00:00'),
(38, '18:30:00'),
(39, '19:00:00'),
(40, '19:30:00'),
(41, '20:00:00'),
(42, '20:30:00'),
(43, '21:00:00'),
(44, '21:30:00'),
(45, '22:00:00'),
(46, '22:30:00'),
(47, '23:00:00'),
(48, '23:30:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_owners`
--

DROP TABLE IF EXISTS `imagenes_owners`;
CREATE TABLE IF NOT EXISTS `imagenes_owners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `image2` varchar(100) DEFAULT NULL,
  `image3` varchar(100) DEFAULT NULL,
  `users_owners_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`users_owners_id`),
  KEY `fk_imagenes_owners_users_owners1_idx` (`users_owners_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `imagenes_owners`
--

INSERT INTO `imagenes_owners` (`id`, `image`, `image2`, `image3`, `users_owners_id`) VALUES
(1, 'imagenCancha-1659053381715-936154043.jpg', 'imagenComedor-1659053381716-954956932.webp', 'imagenOtras-1659053381743-818469738.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_players`
--

DROP TABLE IF EXISTS `imagenes_players`;
CREATE TABLE IF NOT EXISTS `imagenes_players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `foto` varchar(100) NOT NULL,
  `users_players_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`users_players_id`),
  KEY `fk_imagenes_players_user_players1_idx` (`users_players_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_escuelitas`
--

DROP TABLE IF EXISTS `imagen_escuelitas`;
CREATE TABLE IF NOT EXISTS `imagen_escuelitas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(100) NOT NULL,
  `escuelitas_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`escuelitas_id`),
  KEY `fk_imagen_escuelitas_escuelitas1_idx` (`escuelitas_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_torneos`
--

DROP TABLE IF EXISTS `imagen_torneos`;
CREATE TABLE IF NOT EXISTS `imagen_torneos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(100) NOT NULL,
  `torneos_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`torneos_id`),
  KEY `fk_imagen_escuelitas_copy1_torneos1_idx` (`torneos_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logo_owners`
--

DROP TABLE IF EXISTS `logo_owners`;
CREATE TABLE IF NOT EXISTS `logo_owners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `logo` varchar(100) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`users_owners_id`),
  KEY `fk_logo_owners_users_owners1_idx` (`users_owners_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `logo_owners`
--

INSERT INTO `logo_owners` (`id`, `logo`, `users_owners_id`) VALUES
(1, 'logo-1659053381747-233561291.webp', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medios_de_pago`
--

DROP TABLE IF EXISTS `medios_de_pago`;
CREATE TABLE IF NOT EXISTS `medios_de_pago` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `transferencia` varchar(2) NOT NULL,
  `mercado_pago` varchar(2) NOT NULL,
  `efectivo` varchar(2) NOT NULL,
  `tarjeta` varchar(2) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`users_owners_id`),
  KEY `fk_medios_de_pago_users_owners1_idx` (`users_owners_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medios_de_pago`
--

INSERT INTO `medios_de_pago` (`id`, `transferencia`, `mercado_pago`, `efectivo`, `tarjeta`, `users_owners_id`) VALUES
(1, 'No', 'Si', 'Si', 'No', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

DROP TABLE IF EXISTS `profesor`;
CREATE TABLE IF NOT EXISTS `profesor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores_escuelitas`
--

DROP TABLE IF EXISTS `profesores_escuelitas`;
CREATE TABLE IF NOT EXISTS `profesores_escuelitas` (
  `profesor_id` int(11) NOT NULL,
  `escuelitas_id` int(11) NOT NULL,
  `escuelitas_deporte_id` int(11) NOT NULL,
  `escuelitas_genero_id` int(11) NOT NULL,
  PRIMARY KEY (`profesor_id`,`escuelitas_id`,`escuelitas_deporte_id`,`escuelitas_genero_id`),
  KEY `fk_profesor_has_escuelitas_escuelitas1_idx` (`escuelitas_id`,`escuelitas_deporte_id`,`escuelitas_genero_id`),
  KEY `fk_profesor_has_escuelitas_profesor1_idx` (`profesor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefonos_owners`
--

DROP TABLE IF EXISTS `telefonos_owners`;
CREATE TABLE IF NOT EXISTS `telefonos_owners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `telefono` varchar(200) NOT NULL,
  `telefono2` varchar(200) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`users_owners_id`),
  KEY `fk_telefonos_owners_users_owners1_idx` (`users_owners_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `telefonos_owners`
--

INSERT INTO `telefonos_owners` (`id`, `telefono`, `telefono2`, `users_owners_id`) VALUES
(1, '26159995585', '2613356722', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefonos_players`
--

DROP TABLE IF EXISTS `telefonos_players`;
CREATE TABLE IF NOT EXISTS `telefonos_players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `telefono` varchar(200) NOT NULL,
  `telefono2` varchar(200) NOT NULL,
  `users_players_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`users_players_id`),
  KEY `fk_telefonos_players_users_players1_idx` (`users_players_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_de_cancha`
--

DROP TABLE IF EXISTS `tipo_de_cancha`;
CREATE TABLE IF NOT EXISTS `tipo_de_cancha` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `material` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_de_cancha`
--

INSERT INTO `tipo_de_cancha` (`id`, `material`) VALUES
(1, 'Césped'),
(2, 'Césped sintético'),
(3, 'Cemento'),
(4, 'Ladrillo'),
(5, 'Parqué');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `torneos`
--

DROP TABLE IF EXISTS `torneos`;
CREATE TABLE IF NOT EXISTS `torneos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deporte_id` int(11) NOT NULL,
  `genero_id` int(11) NOT NULL,
  `cantidad_equipos` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `valor` int(11) NOT NULL,
  `premio` int(11) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`deporte_id`,`genero_id`,`users_owners_id`),
  KEY `fk_torneos_deporte1_idx` (`deporte_id`),
  KEY `fk_torneos_genero1_idx` (`genero_id`),
  KEY `fk_torneos_users_owners1_idx` (`users_owners_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion`
--

DROP TABLE IF EXISTS `ubicacion`;
CREATE TABLE IF NOT EXISTS `ubicacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provincia` varchar(100) NOT NULL,
  `localidad` varchar(45) NOT NULL,
  `municipio` varchar(45) NOT NULL,
  `calle` varchar(45) NOT NULL,
  `numeracion` int(11) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`users_owners_id`),
  KEY `fk_ubicacion_users_owners1_idx` (`users_owners_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ubicacion`
--

INSERT INTO `ubicacion` (`id`, `provincia`, `localidad`, `municipio`, `calle`, `numeracion`, `users_owners_id`) VALUES
(1, 'Mendoza', 'Guaymallen', 'Dorrego', 'Santa Rosa', 2240, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_owners`
--

DROP TABLE IF EXISTS `users_owners`;
CREATE TABLE IF NOT EXISTS `users_owners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `nombre_del_lugar` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users_owners`
--

INSERT INTO `users_owners` (`id`, `nombre`, `apellido`, `email`, `password`, `nombre_del_lugar`) VALUES
(1, 'Franco', 'Garcia', 'frangarcia93@icloud.com', '$2a$10$eS8Yn8Cf6srpjDZdGovS5OVyBkoHZGLsrasJ9V1QV4bSe/Yxc7FOK', 'La mendocina');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_players`
--

DROP TABLE IF EXISTS `users_players`;
CREATE TABLE IF NOT EXISTS `users_players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `zonas_de_juego_id` int(11) NOT NULL,
  `auto_valoracion_id` int(11) NOT NULL,
  `deportes_players_id` int(11) NOT NULL,
  `deportes_players_id2` int(11) NOT NULL,
  PRIMARY KEY (`id`,`zonas_de_juego_id`,`auto_valoracion_id`,`deportes_players_id`,`deportes_players_id2`),
  KEY `fk_user_players_zonas_de_juego1_idx` (`zonas_de_juego_id`),
  KEY `fk_users_players_auto_valoracion1_idx` (`auto_valoracion_id`),
  KEY `fk_users_players_deportes_players1_idx` (`deportes_players_id`),
  KEY `fk_users_players_deportes_players2_idx` (`deportes_players_id2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_de_juego`
--

DROP TABLE IF EXISTS `zonas_de_juego`;
CREATE TABLE IF NOT EXISTS `zonas_de_juego` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provincia` varchar(45) NOT NULL,
  `localidad` varchar(45) NOT NULL,
  `municipio` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `zonas_de_juego`
--

INSERT INTO `zonas_de_juego` (`id`, `provincia`, `localidad`, `municipio`) VALUES
(1, 'Buenos Aires', 'San fernando', 'Carupa'),
(2, 'Mendoza', 'Guaymallen', 'Dorrego');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `canchas`
--
ALTER TABLE `canchas`
  ADD CONSTRAINT `fk_canchas_deportes_players1` FOREIGN KEY (`deportes_players_id`) REFERENCES `deportes_players` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_canchas_tipo_de_cancha1` FOREIGN KEY (`tipo_de_cancha_id`) REFERENCES `tipo_de_cancha` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_canchas_users_owners1` FOREIGN KEY (`users_owners_id`) REFERENCES `users_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `canchas_horarios`
--
ALTER TABLE `canchas_horarios`
  ADD CONSTRAINT `fk_canchas_has_horas_owners_canchas1` FOREIGN KEY (`canchas_id`) REFERENCES `canchas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_canchas_has_horas_owners_dias_owners1` FOREIGN KEY (`dias_owners_id`) REFERENCES `dias_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_canchas_has_horas_owners_horas_owners1` FOREIGN KEY (`horas_owners_id`) REFERENCES `horas_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD CONSTRAINT `fk_categorias_deportes1` FOREIGN KEY (`deportes_id`) REFERENCES `deportes_players` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `detalle_lugar_owners`
--
ALTER TABLE `detalle_lugar_owners`
  ADD CONSTRAINT `fk_detalle_lugar_owners_users_owners1` FOREIGN KEY (`users_owners_id`) REFERENCES `users_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `dias_y_horas_canchas`
--
ALTER TABLE `dias_y_horas_canchas`
  ADD CONSTRAINT `fk_dias_y_horas_canchas_canchas1` FOREIGN KEY (`canchas_id`) REFERENCES `canchas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_dias_y_horas_canchas_dias1` FOREIGN KEY (`dias_id`) REFERENCES `dias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_dias_y_horas_canchas_horas1` FOREIGN KEY (`horas_id`) REFERENCES `horas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `dias_y_horas_escuelitas`
--
ALTER TABLE `dias_y_horas_escuelitas`
  ADD CONSTRAINT `fk_dias_y_horas_escuelitas_dias1` FOREIGN KEY (`dias_id`) REFERENCES `dias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_dias_y_horas_escuelitas_escuelitas1` FOREIGN KEY (`escuelitas_id`) REFERENCES `escuelitas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_dias_y_horas_escuelitas_horas1` FOREIGN KEY (`horas_id`) REFERENCES `horas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `dias_y_horas_player`
--
ALTER TABLE `dias_y_horas_player`
  ADD CONSTRAINT `fk_dias_y_horas_player_dias_players1` FOREIGN KEY (`dias_players_id`) REFERENCES `dias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_dias_y_horas_player_horas_players1` FOREIGN KEY (`horas_players_id`) REFERENCES `horas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_dias_y_horas_player_users_players1` FOREIGN KEY (`users_players_id`) REFERENCES `users_players` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `dias_y_horas_torneos`
--
ALTER TABLE `dias_y_horas_torneos`
  ADD CONSTRAINT `fk_dias_y_horas_toneos_torneos1` FOREIGN KEY (`torneos_id`) REFERENCES `torneos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_dias_y_horas_torneos_dias1` FOREIGN KEY (`dias_id`) REFERENCES `dias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_dias_y_horas_torneos_horas1` FOREIGN KEY (`horas_id`) REFERENCES `horas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `escuelitas`
--
ALTER TABLE `escuelitas`
  ADD CONSTRAINT `fk_escuelitas_canchas1` FOREIGN KEY (`canchas_id`) REFERENCES `canchas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_escuelitas_deporte1` FOREIGN KEY (`deporte_id`) REFERENCES `deporte` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_escuelitas_genero1` FOREIGN KEY (`genero_id`) REFERENCES `genero` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_escuelitas_users_owners1` FOREIGN KEY (`users_owners_id`) REFERENCES `users_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `escuelitas_horarios`
--
ALTER TABLE `escuelitas_horarios`
  ADD CONSTRAINT `fk_escuelitas_has_horas_owners_dias_owners1` FOREIGN KEY (`dias_owners_id`) REFERENCES `dias_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_escuelitas_has_horas_owners_escuelitas1` FOREIGN KEY (`escuelitas_id`) REFERENCES `escuelitas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_escuelitas_has_horas_owners_horas_owners1` FOREIGN KEY (`horas_owners_id`) REFERENCES `horas_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imagenes_owners`
--
ALTER TABLE `imagenes_owners`
  ADD CONSTRAINT `fk_imagenes_owners_users_owners1` FOREIGN KEY (`users_owners_id`) REFERENCES `users_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imagenes_players`
--
ALTER TABLE `imagenes_players`
  ADD CONSTRAINT `fk_imagenes_players_user_players1` FOREIGN KEY (`users_players_id`) REFERENCES `users_players` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imagen_escuelitas`
--
ALTER TABLE `imagen_escuelitas`
  ADD CONSTRAINT `fk_imagen_escuelitas_escuelitas1` FOREIGN KEY (`escuelitas_id`) REFERENCES `escuelitas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imagen_torneos`
--
ALTER TABLE `imagen_torneos`
  ADD CONSTRAINT `fk_imagen_escuelitas_copy1_torneos1` FOREIGN KEY (`torneos_id`) REFERENCES `torneos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `logo_owners`
--
ALTER TABLE `logo_owners`
  ADD CONSTRAINT `fk_logo_owners_users_owners1` FOREIGN KEY (`users_owners_id`) REFERENCES `users_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `medios_de_pago`
--
ALTER TABLE `medios_de_pago`
  ADD CONSTRAINT `fk_medios_de_pago_users_owners1` FOREIGN KEY (`users_owners_id`) REFERENCES `users_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `profesores_escuelitas`
--
ALTER TABLE `profesores_escuelitas`
  ADD CONSTRAINT `fk_profesor_has_escuelitas_escuelitas1` FOREIGN KEY (`escuelitas_id`,`escuelitas_deporte_id`,`escuelitas_genero_id`) REFERENCES `escuelitas` (`id`, `deporte_id`, `genero_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_profesor_has_escuelitas_profesor1` FOREIGN KEY (`profesor_id`) REFERENCES `profesor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `telefonos_owners`
--
ALTER TABLE `telefonos_owners`
  ADD CONSTRAINT `fk_telefonos_owners_users_owners1` FOREIGN KEY (`users_owners_id`) REFERENCES `users_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `telefonos_players`
--
ALTER TABLE `telefonos_players`
  ADD CONSTRAINT `fk_telefonos_players_users_players` FOREIGN KEY (`users_players_id`) REFERENCES `users_players` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `torneos`
--
ALTER TABLE `torneos`
  ADD CONSTRAINT `fk_torneos_deporte1` FOREIGN KEY (`deporte_id`) REFERENCES `deporte` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_torneos_genero1` FOREIGN KEY (`genero_id`) REFERENCES `genero` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_torneos_users_owners1` FOREIGN KEY (`users_owners_id`) REFERENCES `users_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD CONSTRAINT `fk_ubicacion_users_owners1` FOREIGN KEY (`users_owners_id`) REFERENCES `users_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users_players`
--
ALTER TABLE `users_players`
  ADD CONSTRAINT `fk_user_players_zonas_de_juego1` FOREIGN KEY (`zonas_de_juego_id`) REFERENCES `zonas_de_juego` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_players_auto_valoracion1` FOREIGN KEY (`auto_valoracion_id`) REFERENCES `auto_valoracion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_players_deportes_players1` FOREIGN KEY (`deportes_players_id`) REFERENCES `deportes_players` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_players_deportes_players2` FOREIGN KEY (`deportes_players_id2`) REFERENCES `deportes_players` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
