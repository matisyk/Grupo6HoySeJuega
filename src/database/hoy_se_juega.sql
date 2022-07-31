-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 31-07-2022 a las 23:30:58
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
CREATE TABLE `auto_valoracion` (
  `id` int(11) NOT NULL,
  `tipo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
CREATE TABLE `canchas` (
  `id` int(11) NOT NULL,
  `identificacion` varchar(45) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `valor` int(11) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  `tipo_de_cancha_id` int(11) NOT NULL,
  `deportes_players_id` int(11) NOT NULL,
  `img_c` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `canchas`
--

INSERT INTO `canchas` (`id`, `identificacion`, `capacidad`, `valor`, `users_owners_id`, `tipo_de_cancha_id`, `deportes_players_id`, `img_c`) VALUES
(1, 'Canchita 1', 10, 3000, 1, 2, 1, 'image-1659308328186-555307413.jpg'),
(2, 'Canchita 2', 15, 4000, 1, 2, 1, 'image-1659308352653-192745300.jpg'),
(3, 'Canchita 3', 22, 6000, 1, 1, 1, 'image-1659308596846-821672783.jpg'),
(4, 'Cancha 1', 4, 4000, 3, 3, 4, 'image-1659309340225-693796098.jpg'),
(5, 'Cancha de vidrio', 4, 5000, 3, 3, 4, 'image-1659309453816-368270419.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canchas_horarios`
--

DROP TABLE IF EXISTS `canchas_horarios`;
CREATE TABLE `canchas_horarios` (
  `canchas_id` int(11) NOT NULL,
  `horas_owners_id` int(11) NOT NULL,
  `dias_owners_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `deportes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deportes_players`
--

DROP TABLE IF EXISTS `deportes_players`;
CREATE TABLE `deportes_players` (
  `id` int(11) NOT NULL,
  `deporte` varchar(45) NOT NULL,
  `active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
CREATE TABLE `detalle_lugar_owners` (
  `id` int(11) NOT NULL,
  `iluminacion` varchar(2) NOT NULL,
  `estacionamiento` varchar(2) NOT NULL,
  `wifi` varchar(2) NOT NULL,
  `vestuario` varchar(2) NOT NULL,
  `ducha` varchar(2) NOT NULL,
  `parrilla` varchar(2) NOT NULL,
  `quincho` varchar(2) NOT NULL,
  `quiosco` varchar(2) NOT NULL,
  `users_owners_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `detalle_lugar_owners`
--

INSERT INTO `detalle_lugar_owners` (`id`, `iluminacion`, `estacionamiento`, `wifi`, `vestuario`, `ducha`, `parrilla`, `quincho`, `quiosco`, `users_owners_id`) VALUES
(1, 'Si', 'No', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 1),
(2, 'Si', 'Si', 'No', 'Si', 'No', 'Si', 'No', 'Si', 2),
(3, 'Si', 'Si', 'No', 'No', 'No', 'Si', 'Si', 'Si', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias`
--

DROP TABLE IF EXISTS `dias`;
CREATE TABLE `dias` (
  `id` int(11) NOT NULL,
  `dia` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
CREATE TABLE `dias_y_horas_canchas` (
  `id` int(11) NOT NULL,
  `canchas_id` int(11) NOT NULL,
  `horas_id` int(11) NOT NULL,
  `dias_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias_y_horas_escuelitas`
--

DROP TABLE IF EXISTS `dias_y_horas_escuelitas`;
CREATE TABLE `dias_y_horas_escuelitas` (
  `id` int(11) NOT NULL,
  `escuelitas_id` int(11) NOT NULL,
  `horas_id` int(11) NOT NULL,
  `dias_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `dias_y_horas_escuelitas`
--

INSERT INTO `dias_y_horas_escuelitas` (`id`, `escuelitas_id`, `horas_id`, `dias_id`) VALUES
(1, 1, 35, 1),
(2, 2, 39, 5),
(3, 3, 35, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias_y_horas_player`
--

DROP TABLE IF EXISTS `dias_y_horas_player`;
CREATE TABLE `dias_y_horas_player` (
  `id` int(11) NOT NULL,
  `dias_players_id` int(11) NOT NULL,
  `horas_players_id` int(11) NOT NULL,
  `users_players_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `dias_y_horas_player`
--

INSERT INTO `dias_y_horas_player` (`id`, `dias_players_id`, `horas_players_id`, `users_players_id`) VALUES
(1, 1, 35, 1),
(3, 5, 15, 3),
(2, 6, 31, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias_y_horas_torneos`
--

DROP TABLE IF EXISTS `dias_y_horas_torneos`;
CREATE TABLE `dias_y_horas_torneos` (
  `id` int(11) NOT NULL,
  `torneos_id` int(11) NOT NULL,
  `horas_id` int(11) NOT NULL,
  `dias_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `dias_y_horas_torneos`
--

INSERT INTO `dias_y_horas_torneos` (`id`, `torneos_id`, `horas_id`, `dias_id`) VALUES
(1, 1, 25, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escuelitas`
--

DROP TABLE IF EXISTS `escuelitas`;
CREATE TABLE `escuelitas` (
  `id` int(11) NOT NULL,
  `genero_id` int(11) NOT NULL,
  `valor` int(11) NOT NULL,
  `canchas_id` int(11) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  `img_e` varchar(200) NOT NULL,
  `deportes_players_id` int(11) NOT NULL,
  `categoria` int(100) NOT NULL,
  `alumnos` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `escuelitas`
--

INSERT INTO `escuelitas` (`id`, `genero_id`, `valor`, `canchas_id`, `users_owners_id`, `img_e`, `deportes_players_id`, `categoria`, `alumnos`) VALUES
(1, 1, 1500, 1, 1, 'image-1659308685778-205480734.jpg', 1, 2000, 20),
(2, 1, 2000, 3, 1, 'image-1659308861429-14481913.png', 1, 1995, 50),
(3, 3, 3000, 4, 3, 'image-1659309543491-725578043.jpg', 4, 2000, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escuelitas_horarios`
--

DROP TABLE IF EXISTS `escuelitas_horarios`;
CREATE TABLE `escuelitas_horarios` (
  `escuelitas_id` int(11) NOT NULL,
  `horas_owners_id` int(11) NOT NULL,
  `dias_owners_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

DROP TABLE IF EXISTS `genero`;
CREATE TABLE `genero` (
  `id` int(11) NOT NULL,
  `genero` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`id`, `genero`) VALUES
(1, 'Femenino'),
(2, 'Masculino'),
(3, 'Mixto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `home_owners`
--

DROP TABLE IF EXISTS `home_owners`;
CREATE TABLE `home_owners` (
  `id` int(11) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  `nombre_del_lugar` varchar(100) NOT NULL,
  `img_ho` varchar(100) NOT NULL,
  `img_hl` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `home_owners`
--

INSERT INTO `home_owners` (`id`, `users_owners_id`, `nombre_del_lugar`, `img_ho`, `img_hl`) VALUES
(1, 1, 'The Franck', 'imagenCancha-1659307154412-314948389.jpg', 'logo-1659307154439-365893950.webp'),
(2, 2, 'Toscana', 'imagenCancha-1659307342243-867618226.webp', 'logo-1659307342269-483404314.jpg'),
(3, 3, 'La Candelaria', 'imagenCancha-1659309279874-829497691.jpg', 'logo-1659309279877-755998190.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `home_players`
--

DROP TABLE IF EXISTS `home_players`;
CREATE TABLE `home_players` (
  `id` int(11) NOT NULL,
  `users_players_id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `img_hp` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `home_players`
--

INSERT INTO `home_players` (`id`, `users_players_id`, `nombre`, `apellido`, `img_hp`) VALUES
(1, 1, 'Franco', 'Garcia', 'imagenJugador-1659306623396-167505702.jpg'),
(2, 2, 'Candela', 'Garcia', 'imagenJugador-1659306708994-178632538.jpg'),
(3, 3, 'Lucas', 'Daconte', 'imagenJugador-1659306955310-911205802.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horas`
--

DROP TABLE IF EXISTS `horas`;
CREATE TABLE `horas` (
  `id` int(11) NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
CREATE TABLE `imagenes_owners` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `image2` varchar(100) DEFAULT NULL,
  `image3` varchar(100) DEFAULT NULL,
  `users_owners_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `imagenes_owners`
--

INSERT INTO `imagenes_owners` (`id`, `image`, `image2`, `image3`, `users_owners_id`) VALUES
(1, 'imagenCancha-1659307154412-314948389.jpg', 'imagenComedor-1659307154414-25745839.webp', 'imagenOtras-1659307154436-699120032.jpg', 1),
(2, 'imagenCancha-1659307342243-867618226.webp', 'imagenComedor-1659307342264-944656545.jpg', 'imagenOtras-1659307342264-773703326.jpg', 2),
(3, 'imagenCancha-1659309279874-829497691.jpg', 'imagenComedor-1659309279876-724765471.jpg', 'imagenOtras-1659309279876-59556173.jpg', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_players`
--

DROP TABLE IF EXISTS `imagenes_players`;
CREATE TABLE `imagenes_players` (
  `id` int(11) NOT NULL,
  `foto` varchar(100) NOT NULL,
  `users_players_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `imagenes_players`
--

INSERT INTO `imagenes_players` (`id`, `foto`, `users_players_id`) VALUES
(1, 'imagenJugador-1659306623396-167505702.jpg', 1),
(2, 'imagenJugador-1659306708994-178632538.jpg', 2),
(3, 'imagenJugador-1659306955310-911205802.jpg', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_escuelitas`
--

DROP TABLE IF EXISTS `imagen_escuelitas`;
CREATE TABLE `imagen_escuelitas` (
  `id` int(11) NOT NULL,
  `link` varchar(100) NOT NULL,
  `escuelitas_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logo_owners`
--

DROP TABLE IF EXISTS `logo_owners`;
CREATE TABLE `logo_owners` (
  `id` int(11) NOT NULL,
  `logo` varchar(100) NOT NULL,
  `users_owners_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `logo_owners`
--

INSERT INTO `logo_owners` (`id`, `logo`, `users_owners_id`) VALUES
(1, 'logo-1659307154439-365893950.webp', 1),
(2, 'logo-1659307342269-483404314.jpg', 2),
(3, 'logo-1659309279877-755998190.jpg', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medios_de_pago`
--

DROP TABLE IF EXISTS `medios_de_pago`;
CREATE TABLE `medios_de_pago` (
  `id` int(11) NOT NULL,
  `transferencia` varchar(2) NOT NULL,
  `mercado_pago` varchar(2) NOT NULL,
  `efectivo` varchar(2) NOT NULL,
  `tarjeta` varchar(2) NOT NULL,
  `users_owners_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medios_de_pago`
--

INSERT INTO `medios_de_pago` (`id`, `transferencia`, `mercado_pago`, `efectivo`, `tarjeta`, `users_owners_id`) VALUES
(1, 'No', 'Si', 'Si', 'Si', 1),
(2, 'Si', 'Si', 'Si', 'No', 2),
(3, 'Si', 'Si', 'Si', 'Si', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

DROP TABLE IF EXISTS `profesor`;
CREATE TABLE `profesor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  `escuelitas_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id`, `nombre`, `apellido`, `users_owners_id`, `escuelitas_id`) VALUES
(1, 'Federico', 'Pierotti', 1, 1),
(2, 'Florencia', 'Melincue', 1, 2),
(3, 'Lucas', 'Craco', 3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores_escuelitas`
--

DROP TABLE IF EXISTS `profesores_escuelitas`;
CREATE TABLE `profesores_escuelitas` (
  `escuelitas_id` int(11) NOT NULL,
  `escuelitas_deporte_id` int(11) NOT NULL,
  `escuelitas_genero_id` int(11) NOT NULL,
  `profesor_id` int(11) NOT NULL,
  `profesor_users_owners_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefonos_owners`
--

DROP TABLE IF EXISTS `telefonos_owners`;
CREATE TABLE `telefonos_owners` (
  `id` int(11) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `telefono2` varchar(200) NOT NULL,
  `users_owners_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `telefonos_owners`
--

INSERT INTO `telefonos_owners` (`id`, `telefono`, `telefono2`, `users_owners_id`) VALUES
(1, '2615665545', '26145564', 1),
(2, '114566554', '114052644', 2),
(3, '26155548', '26144574', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefonos_players`
--

DROP TABLE IF EXISTS `telefonos_players`;
CREATE TABLE `telefonos_players` (
  `id` int(11) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `telefono2` varchar(200) NOT NULL,
  `users_players_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `telefonos_players`
--

INSERT INTO `telefonos_players` (`id`, `telefono`, `telefono2`, `users_players_id`) VALUES
(1, '2615995585', '261566457', 1),
(2, '12454654', '454552454', 2),
(3, '11456685', '55442416', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_de_cancha`
--

DROP TABLE IF EXISTS `tipo_de_cancha`;
CREATE TABLE `tipo_de_cancha` (
  `id` int(11) NOT NULL,
  `material` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
CREATE TABLE `torneos` (
  `id` int(11) NOT NULL,
  `genero_id` int(11) NOT NULL,
  `cantidad_equipos` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `valor` int(11) NOT NULL,
  `premio` int(11) NOT NULL,
  `users_owners_id` int(11) NOT NULL,
  `img_t` varchar(200) DEFAULT NULL,
  `deportes_players_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `torneos`
--

INSERT INTO `torneos` (`id`, `genero_id`, `cantidad_equipos`, `categoria`, `fecha_inicio`, `fecha_fin`, `valor`, `premio`, `users_owners_id`, `img_t`, `deportes_players_id`) VALUES
(1, 2, 50, 1993, '2022-07-31', '2022-08-31', 5000, 50000, 1, 'image-1659308800797-127682778.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion`
--

DROP TABLE IF EXISTS `ubicacion`;
CREATE TABLE `ubicacion` (
  `id` int(11) NOT NULL,
  `provincia` varchar(100) NOT NULL,
  `localidad` varchar(45) NOT NULL,
  `municipio` varchar(45) NOT NULL,
  `calle` varchar(45) NOT NULL,
  `numeracion` int(11) NOT NULL,
  `users_owners_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ubicacion`
--

INSERT INTO `ubicacion` (`id`, `provincia`, `localidad`, `municipio`, `calle`, `numeracion`, `users_owners_id`) VALUES
(1, 'Mendoza', 'Guaymallen', 'Dorrego', 'Santa Rosa', 2240, 1),
(2, 'Buenos Aires', 'San Fernando', 'Carupa', 'French', 665, 2),
(3, 'Mendoza', 'Guaymallen', 'Dorrego', 'Santa Rosa', 554, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_owners`
--

DROP TABLE IF EXISTS `users_owners`;
CREATE TABLE `users_owners` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `nombre_del_lugar` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users_owners`
--

INSERT INTO `users_owners` (`id`, `nombre`, `apellido`, `email`, `password`, `nombre_del_lugar`) VALUES
(1, 'Franco', 'Garcia', 'frangarcia93@icloud.com', '$2a$10$y9wLQCd3/Rlz5J8PWU71g.nalOZXN4rUm56MBR/jaoCi48I4Yd/vW', 'The Franck'),
(2, 'Lucas', 'Daconte', 'lucasd@gmail.com', '$2a$10$m8JGVxWmuRGa7cz75xxt5u2hntqcgq24V2Dzs7Qec2JorOYgrD9JC', 'Toscana'),
(3, 'Candela', 'Garcia', 'candeGarcia@gmail.com', '$2a$10$0tYaHEHb4qx5X1KKYlHtweBn/FpActe6.Xseq01RS4qSa.XuMZi2e', 'La Candelaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_players`
--

DROP TABLE IF EXISTS `users_players`;
CREATE TABLE `users_players` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `zonas_de_juego_id` int(11) NOT NULL,
  `auto_valoracion_id` int(11) NOT NULL,
  `deportes_players_id` int(11) NOT NULL,
  `deportes_players_id2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users_players`
--

INSERT INTO `users_players` (`id`, `nombre`, `apellido`, `email`, `password`, `fecha_nacimiento`, `zonas_de_juego_id`, `auto_valoracion_id`, `deportes_players_id`, `deportes_players_id2`) VALUES
(1, 'Franco', 'Garcia', 'frangarcia93@icloud.com', '$2a$10$TGmWV8rHADirYPFZ9GR/I.5cOct7uWPqFNhfAVJXyh0F1thKiOHyu', '1993-10-31', 1, 1, 1, 4),
(2, 'Candela', 'Garcia', 'candeGarcia@gmail.com', '$2a$10$geP7q2WSCkyFXB6yPtFatO9ppt.JhuMxPM.oYmuJNfZabsSj481zq', '2000-02-10', 1, 3, 1, 2),
(3, 'Lucas', 'Daconte', 'lucasd@gmail.com', '$2a$10$MC18UD1NztUqdBs/HuxtJ.NRbLQb.CUNZsQylECo8w5jWijX.qi/C', '1995-10-10', 1, 3, 1, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_de_juego`
--

DROP TABLE IF EXISTS `zonas_de_juego`;
CREATE TABLE `zonas_de_juego` (
  `id` int(11) NOT NULL,
  `provincia` varchar(45) NOT NULL,
  `localidad` varchar(45) NOT NULL,
  `municipio` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `zonas_de_juego`
--

INSERT INTO `zonas_de_juego` (`id`, `provincia`, `localidad`, `municipio`) VALUES
(1, 'Buenos Aires', 'San fernando', 'Carupa'),
(2, 'Mendoza', 'Guaymallen', 'Dorrego');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auto_valoracion`
--
ALTER TABLE `auto_valoracion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `canchas`
--
ALTER TABLE `canchas`
  ADD PRIMARY KEY (`id`,`users_owners_id`,`tipo_de_cancha_id`,`deportes_players_id`),
  ADD KEY `fk_canchas_users_owners1_idx` (`users_owners_id`),
  ADD KEY `fk_canchas_tipo_de_cancha1_idx` (`tipo_de_cancha_id`),
  ADD KEY `fk_canchas_deportes_players1_idx` (`deportes_players_id`);

--
-- Indices de la tabla `canchas_horarios`
--
ALTER TABLE `canchas_horarios`
  ADD PRIMARY KEY (`canchas_id`,`horas_owners_id`,`dias_owners_id`),
  ADD KEY `fk_canchas_has_horas_owners_horas_owners1_idx` (`horas_owners_id`),
  ADD KEY `fk_canchas_has_horas_owners_canchas1_idx` (`canchas_id`),
  ADD KEY `fk_canchas_has_horas_owners_dias_owners1_idx` (`dias_owners_id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`,`deportes_id`),
  ADD KEY `fk_categorias_deportes1_idx` (`deportes_id`);

--
-- Indices de la tabla `deportes_players`
--
ALTER TABLE `deportes_players`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_lugar_owners`
--
ALTER TABLE `detalle_lugar_owners`
  ADD PRIMARY KEY (`id`,`users_owners_id`),
  ADD KEY `fk_detalle_lugar_owners_users_owners1_idx` (`users_owners_id`);

--
-- Indices de la tabla `dias`
--
ALTER TABLE `dias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `dias_y_horas_canchas`
--
ALTER TABLE `dias_y_horas_canchas`
  ADD PRIMARY KEY (`id`,`canchas_id`,`horas_id`,`dias_id`),
  ADD KEY `fk_dias_y_horas_canchas_canchas1_idx` (`canchas_id`),
  ADD KEY `fk_dias_y_horas_canchas_horas1_idx` (`horas_id`),
  ADD KEY `fk_dias_y_horas_canchas_dias1_idx` (`dias_id`);

--
-- Indices de la tabla `dias_y_horas_escuelitas`
--
ALTER TABLE `dias_y_horas_escuelitas`
  ADD PRIMARY KEY (`id`,`escuelitas_id`,`horas_id`,`dias_id`),
  ADD KEY `fk_dias_y_horas_escuelitas_escuelitas1_idx` (`escuelitas_id`),
  ADD KEY `fk_dias_y_horas_escuelitas_horas1_idx` (`horas_id`),
  ADD KEY `fk_dias_y_horas_escuelitas_dias1_idx` (`dias_id`);

--
-- Indices de la tabla `dias_y_horas_player`
--
ALTER TABLE `dias_y_horas_player`
  ADD PRIMARY KEY (`id`,`dias_players_id`,`horas_players_id`,`users_players_id`),
  ADD KEY `fk_dias_y_horas_player_dias_players1_idx` (`dias_players_id`),
  ADD KEY `fk_dias_y_horas_player_horas_players1_idx` (`horas_players_id`),
  ADD KEY `fk_dias_y_horas_player_users_players1_idx` (`users_players_id`);

--
-- Indices de la tabla `dias_y_horas_torneos`
--
ALTER TABLE `dias_y_horas_torneos`
  ADD PRIMARY KEY (`id`,`torneos_id`,`horas_id`,`dias_id`),
  ADD KEY `fk_dias_y_horas_toneos_torneos1_idx` (`torneos_id`),
  ADD KEY `fk_dias_y_horas_torneos_horas1_idx` (`horas_id`),
  ADD KEY `fk_dias_y_horas_torneos_dias1_idx` (`dias_id`);

--
-- Indices de la tabla `escuelitas`
--
ALTER TABLE `escuelitas`
  ADD PRIMARY KEY (`id`,`genero_id`,`canchas_id`,`users_owners_id`,`deportes_players_id`),
  ADD KEY `fk_escuelitas_genero1_idx` (`genero_id`),
  ADD KEY `fk_escuelitas_canchas1_idx` (`canchas_id`),
  ADD KEY `fk_escuelitas_users_owners1_idx` (`users_owners_id`),
  ADD KEY `fk_escuelitas_deportes_players1_idx` (`deportes_players_id`);

--
-- Indices de la tabla `escuelitas_horarios`
--
ALTER TABLE `escuelitas_horarios`
  ADD PRIMARY KEY (`escuelitas_id`,`horas_owners_id`,`dias_owners_id`),
  ADD KEY `fk_escuelitas_has_horas_owners_horas_owners1_idx` (`horas_owners_id`),
  ADD KEY `fk_escuelitas_has_horas_owners_escuelitas1_idx` (`escuelitas_id`),
  ADD KEY `fk_escuelitas_has_horas_owners_dias_owners1_idx` (`dias_owners_id`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `home_owners`
--
ALTER TABLE `home_owners`
  ADD PRIMARY KEY (`id`,`users_owners_id`),
  ADD KEY `fk_home_owners_users_owners1_idx` (`users_owners_id`);

--
-- Indices de la tabla `home_players`
--
ALTER TABLE `home_players`
  ADD PRIMARY KEY (`id`,`users_players_id`),
  ADD KEY `fk_home_players_users_players1_idx` (`users_players_id`);

--
-- Indices de la tabla `horas`
--
ALTER TABLE `horas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenes_owners`
--
ALTER TABLE `imagenes_owners`
  ADD PRIMARY KEY (`id`,`users_owners_id`),
  ADD KEY `fk_imagenes_owners_users_owners1_idx` (`users_owners_id`);

--
-- Indices de la tabla `imagenes_players`
--
ALTER TABLE `imagenes_players`
  ADD PRIMARY KEY (`id`,`users_players_id`),
  ADD KEY `fk_imagenes_players_user_players1_idx` (`users_players_id`);

--
-- Indices de la tabla `imagen_escuelitas`
--
ALTER TABLE `imagen_escuelitas`
  ADD PRIMARY KEY (`id`,`escuelitas_id`),
  ADD KEY `fk_imagen_escuelitas_escuelitas1_idx` (`escuelitas_id`);

--
-- Indices de la tabla `logo_owners`
--
ALTER TABLE `logo_owners`
  ADD PRIMARY KEY (`id`,`users_owners_id`),
  ADD KEY `fk_logo_owners_users_owners1_idx` (`users_owners_id`);

--
-- Indices de la tabla `medios_de_pago`
--
ALTER TABLE `medios_de_pago`
  ADD PRIMARY KEY (`id`,`users_owners_id`),
  ADD KEY `fk_medios_de_pago_users_owners1_idx` (`users_owners_id`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id`,`users_owners_id`,`escuelitas_id`),
  ADD KEY `fk_profesor_users_owners1_idx` (`users_owners_id`),
  ADD KEY `fk_profesor_escuelitas1_idx` (`escuelitas_id`);

--
-- Indices de la tabla `profesores_escuelitas`
--
ALTER TABLE `profesores_escuelitas`
  ADD PRIMARY KEY (`escuelitas_id`,`escuelitas_deporte_id`,`escuelitas_genero_id`,`profesor_id`,`profesor_users_owners_id`),
  ADD KEY `fk_profesor_has_escuelitas_escuelitas1` (`escuelitas_id`,`escuelitas_genero_id`),
  ADD KEY `fk_profesor_has_escuelitas_escuelitas1_idx` (`escuelitas_id`,`escuelitas_deporte_id`,`escuelitas_genero_id`),
  ADD KEY `fk_profesores_escuelitas_profesor1_idx` (`profesor_id`,`profesor_users_owners_id`);

--
-- Indices de la tabla `telefonos_owners`
--
ALTER TABLE `telefonos_owners`
  ADD PRIMARY KEY (`id`,`users_owners_id`),
  ADD KEY `fk_telefonos_owners_users_owners1_idx` (`users_owners_id`);

--
-- Indices de la tabla `telefonos_players`
--
ALTER TABLE `telefonos_players`
  ADD PRIMARY KEY (`id`,`users_players_id`),
  ADD KEY `fk_telefonos_players_users_players1_idx` (`users_players_id`);

--
-- Indices de la tabla `tipo_de_cancha`
--
ALTER TABLE `tipo_de_cancha`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `torneos`
--
ALTER TABLE `torneos`
  ADD PRIMARY KEY (`id`,`genero_id`,`users_owners_id`,`deportes_players_id`),
  ADD KEY `fk_torneos_genero1_idx` (`genero_id`),
  ADD KEY `fk_torneos_users_owners1_idx` (`users_owners_id`),
  ADD KEY `fk_torneos_deportes_players1_idx` (`deportes_players_id`);

--
-- Indices de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD PRIMARY KEY (`id`,`users_owners_id`),
  ADD KEY `fk_ubicacion_users_owners1_idx` (`users_owners_id`);

--
-- Indices de la tabla `users_owners`
--
ALTER TABLE `users_owners`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users_players`
--
ALTER TABLE `users_players`
  ADD PRIMARY KEY (`id`,`zonas_de_juego_id`,`auto_valoracion_id`,`deportes_players_id`,`deportes_players_id2`),
  ADD KEY `fk_user_players_zonas_de_juego1_idx` (`zonas_de_juego_id`),
  ADD KEY `fk_users_players_auto_valoracion1_idx` (`auto_valoracion_id`),
  ADD KEY `fk_users_players_deportes_players1_idx` (`deportes_players_id`),
  ADD KEY `fk_users_players_deportes_players2_idx` (`deportes_players_id2`);

--
-- Indices de la tabla `zonas_de_juego`
--
ALTER TABLE `zonas_de_juego`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auto_valoracion`
--
ALTER TABLE `auto_valoracion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `canchas`
--
ALTER TABLE `canchas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `deportes_players`
--
ALTER TABLE `deportes_players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `detalle_lugar_owners`
--
ALTER TABLE `detalle_lugar_owners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `dias`
--
ALTER TABLE `dias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `dias_y_horas_canchas`
--
ALTER TABLE `dias_y_horas_canchas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `dias_y_horas_escuelitas`
--
ALTER TABLE `dias_y_horas_escuelitas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `dias_y_horas_player`
--
ALTER TABLE `dias_y_horas_player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `dias_y_horas_torneos`
--
ALTER TABLE `dias_y_horas_torneos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `escuelitas`
--
ALTER TABLE `escuelitas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `genero`
--
ALTER TABLE `genero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `home_owners`
--
ALTER TABLE `home_owners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `home_players`
--
ALTER TABLE `home_players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `horas`
--
ALTER TABLE `horas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `imagenes_owners`
--
ALTER TABLE `imagenes_owners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `imagenes_players`
--
ALTER TABLE `imagenes_players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `imagen_escuelitas`
--
ALTER TABLE `imagen_escuelitas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `logo_owners`
--
ALTER TABLE `logo_owners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `medios_de_pago`
--
ALTER TABLE `medios_de_pago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `telefonos_owners`
--
ALTER TABLE `telefonos_owners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `telefonos_players`
--
ALTER TABLE `telefonos_players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo_de_cancha`
--
ALTER TABLE `tipo_de_cancha`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `torneos`
--
ALTER TABLE `torneos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users_owners`
--
ALTER TABLE `users_owners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users_players`
--
ALTER TABLE `users_players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `zonas_de_juego`
--
ALTER TABLE `zonas_de_juego`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  ADD CONSTRAINT `fk_dias_y_horas_escuelitas_escuelitas1` FOREIGN KEY (`escuelitas_id`) REFERENCES `escuelitas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
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
  ADD CONSTRAINT `fk_escuelitas_deportes_players1` FOREIGN KEY (`deportes_players_id`) REFERENCES `deportes_players` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
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
-- Filtros para la tabla `home_owners`
--
ALTER TABLE `home_owners`
  ADD CONSTRAINT `fk_home_owners_users_owners1` FOREIGN KEY (`users_owners_id`) REFERENCES `users_owners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `home_players`
--
ALTER TABLE `home_players`
  ADD CONSTRAINT `fk_home_players_users_players1` FOREIGN KEY (`users_players_id`) REFERENCES `users_players` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
-- Filtros para la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD CONSTRAINT `fk_profesor_escuelitas1` FOREIGN KEY (`escuelitas_id`) REFERENCES `escuelitas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_profesor_users_owners1` FOREIGN KEY (`users_owners_id`) REFERENCES `users_owners` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `profesores_escuelitas`
--
ALTER TABLE `profesores_escuelitas`
  ADD CONSTRAINT `fk_profesor_has_escuelitas_escuelitas1` FOREIGN KEY (`escuelitas_id`,`escuelitas_genero_id`) REFERENCES `escuelitas` (`id`, `genero_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_profesores_escuelitas_profesor1` FOREIGN KEY (`profesor_id`,`profesor_users_owners_id`) REFERENCES `profesor` (`id`, `users_owners_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
  ADD CONSTRAINT `fk_torneos_deportes_players1` FOREIGN KEY (`deportes_players_id`) REFERENCES `deportes_players` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
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
