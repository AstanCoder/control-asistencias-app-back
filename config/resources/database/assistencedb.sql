/*
 Navicat Premium Data Transfer

 Source Server         : mysql local
 Source Server Type    : MySQL
 Source Server Version : 80033 (8.0.33)
 Source Host           : localhost:3306
 Source Schema         : assistencedb

 Target Server Type    : MySQL
 Target Server Version : 80033 (8.0.33)
 File Encoding         : 65001

 Date: 19/05/2023 20:50:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for asistencia
-- ----------------------------
DROP TABLE IF EXISTS `asistencia`;
CREATE TABLE `asistencia`  (
  `estudiante_usuario_id` int NOT NULL,
  `materia_id` int NOT NULL,
  `estado_asistencia_id` int NOT NULL,
  `fecha` timestamp(6) NOT NULL,
  PRIMARY KEY (`estudiante_usuario_id`, `materia_id`) USING BTREE,
  INDEX `fk_Asistencia_materia1_idx`(`materia_id` ASC) USING BTREE,
  INDEX `fk_Asistencia_estado_asistencia1_idx`(`estado_asistencia_id` ASC) USING BTREE,
  CONSTRAINT `fk_Asistencia_estado_asistencia1` FOREIGN KEY (`estado_asistencia_id`) REFERENCES `estado_asistencia` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_Asistencia_estudiante1` FOREIGN KEY (`estudiante_usuario_id`) REFERENCES `estudiante` (`usuario_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_Asistencia_materia1` FOREIGN KEY (`materia_id`) REFERENCES `materia` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for carrera
-- ----------------------------
DROP TABLE IF EXISTS `carrera`;
CREATE TABLE `carrera`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `facultad_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_carrera_facultad1_idx`(`facultad_id` ASC) USING BTREE,
  CONSTRAINT `fk_carrera_facultad1` FOREIGN KEY (`facultad_id`) REFERENCES `facultad` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for centro
-- ----------------------------
DROP TABLE IF EXISTS `centro`;
CREATE TABLE `centro`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for curso
-- ----------------------------
DROP TABLE IF EXISTS `curso`;
CREATE TABLE `curso`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `anno_inicio` int NOT NULL,
  `anno_fin` int NOT NULL,
  `carrera_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_curso_carrera1_idx`(`carrera_id` ASC) USING BTREE,
  CONSTRAINT `fk_curso_carrera1` FOREIGN KEY (`carrera_id`) REFERENCES `carrera` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for departamento
-- ----------------------------
DROP TABLE IF EXISTS `departamento`;
CREATE TABLE `departamento`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `facultad_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_departamento_facultad1_idx`(`facultad_id` ASC) USING BTREE,
  CONSTRAINT `fk_departamento_facultad1` FOREIGN KEY (`facultad_id`) REFERENCES `facultad` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for estado_asistencia
-- ----------------------------
DROP TABLE IF EXISTS `estado_asistencia`;
CREATE TABLE `estado_asistencia`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` int NOT NULL,
  `label` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for estudiante
-- ----------------------------
DROP TABLE IF EXISTS `estudiante`;
CREATE TABLE `estudiante`  (
  `esRepitente` tinyint NOT NULL,
  `usuario_id` int NOT NULL,
  `matricula_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`) USING BTREE,
  INDEX `fk_estudiante_usuario1_idx`(`usuario_id` ASC) USING BTREE,
  INDEX `fk_estudiante_matricula1_idx`(`matricula_id` ASC) USING BTREE,
  CONSTRAINT `fk_estudiante_matricula1` FOREIGN KEY (`matricula_id`) REFERENCES `matricula` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_estudiante_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for facultad
-- ----------------------------
DROP TABLE IF EXISTS `facultad`;
CREATE TABLE `facultad`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `centro_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_facultad_centro_idx`(`centro_id` ASC) USING BTREE,
  CONSTRAINT `fk_facultad_centro` FOREIGN KEY (`centro_id`) REFERENCES `centro` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for materia
-- ----------------------------
DROP TABLE IF EXISTS `materia`;
CREATE TABLE `materia`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `departamento_id` int NOT NULL,
  `semestre_id` int NOT NULL,
  `semestre_curso_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_materia_departamento1_idx`(`departamento_id` ASC) USING BTREE,
  INDEX `fk_materia_semestre1_idx`(`semestre_id` ASC, `semestre_curso_id` ASC) USING BTREE,
  CONSTRAINT `fk_materia_departamento1` FOREIGN KEY (`departamento_id`) REFERENCES `departamento` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_materia_semestre1` FOREIGN KEY (`semestre_id`, `semestre_curso_id`) REFERENCES `semestre` (`id`, `curso_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for matricula
-- ----------------------------
DROP TABLE IF EXISTS `matricula`;
CREATE TABLE `matricula`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `materia_id` int NOT NULL,
  PRIMARY KEY (`id`, `materia_id`) USING BTREE,
  INDEX `fk_matricula_materia1_idx`(`materia_id` ASC) USING BTREE,
  CONSTRAINT `fk_matricula_materia1` FOREIGN KEY (`materia_id`) REFERENCES `materia` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for profesor
-- ----------------------------
DROP TABLE IF EXISTS `profesor`;
CREATE TABLE `profesor`  (
  `tipo_profesor_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  `departamento_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`) USING BTREE,
  INDEX `fk_profesor_usuario1_idx`(`usuario_id` ASC) USING BTREE,
  INDEX `fk_profesor_departamento1_idx`(`departamento_id` ASC) USING BTREE,
  INDEX `fk_profesor_tipo_profesor_idx`(`tipo_profesor_id` ASC) USING BTREE,
  CONSTRAINT `fk_profesor_departamento1` FOREIGN KEY (`departamento_id`) REFERENCES `departamento` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_profesor_tipo_profesor` FOREIGN KEY (`tipo_profesor_id`) REFERENCES `tipo_profesor` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_profesor_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for semestre
-- ----------------------------
DROP TABLE IF EXISTS `semestre`;
CREATE TABLE `semestre`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `curso_id` int NOT NULL,
  PRIMARY KEY (`id`, `curso_id`) USING BTREE,
  INDEX `fk_semestre_curso1_idx`(`curso_id` ASC) USING BTREE,
  CONSTRAINT `fk_semestre_curso1` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tipo_profesor
-- ----------------------------
DROP TABLE IF EXISTS `tipo_profesor`;
CREATE TABLE `tipo_profesor`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `surname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `ci` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `centro_id` int NOT NULL,
  `rol_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_usuario_centro1_idx`(`centro_id` ASC) USING BTREE,
  INDEX `fk_usuario_rol_idx`(`rol_id` ASC) USING BTREE,
  CONSTRAINT `fk_usuario_centro1` FOREIGN KEY (`centro_id`) REFERENCES `centro` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_usuario_rol` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
