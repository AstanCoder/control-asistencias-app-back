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

 Date: 20/05/2023 00:24:04
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
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for estado_asistencia
-- ----------------------------
DROP TABLE IF EXISTS `estado_asistencia`;
CREATE TABLE `estado_asistencia`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` int NOT NULL,
  `label` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- View structure for getfulluserdata
-- ----------------------------
DROP VIEW IF EXISTS `getfulluserdata`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `getfulluserdata` AS select `usuario`.`name` AS `name`,`usuario`.`ci` AS `ci`,`usuario`.`email` AS `email`,`rol`.`value` AS `tipo_usuario`,`centro`.`nombre` AS `centro`,`facultad`.`nombre` AS `facultad` from (((`usuario` join `rol` on((`usuario`.`rol_id` = `rol`.`id`))) join `centro` on((`usuario`.`centro_id` = `centro`.`id`))) join `facultad` on((`centro`.`id` = `facultad`.`centro_id`)));

-- ----------------------------
-- View structure for getprofessorsbydepartment
-- ----------------------------
DROP VIEW IF EXISTS `getprofessorsbydepartment`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `getprofessorsbydepartment` AS select `usuario`.`ci` AS `ci_profesor`,`usuario`.`name` AS `nombre_profesor`,`usuario`.`email` AS `email_profesor`,`tipo_profesor`.`value` AS `tipo_profesor`,`departamento`.`nombre` AS `departamento` from (((`departamento` join `profesor` on((`departamento`.`id` = `profesor`.`departamento_id`))) join `tipo_profesor` on((`profesor`.`tipo_profesor_id` = `tipo_profesor`.`id`))) join `usuario` on((`profesor`.`usuario_id` = `usuario`.`id`)));

-- ----------------------------
-- View structure for getstudentsbysubject
-- ----------------------------
DROP VIEW IF EXISTS `getstudentsbysubject`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `getstudentsbysubject` AS select `usuario`.`name` AS `nombre_estudiante`,`usuario`.`ci` AS `ci_estudiante`,`usuario`.`email` AS `email_estudiante`,`materia`.`nombre` AS `materia`,`estudiante`.`esRepitente` AS `esRepitente` from (((`matricula` join `estudiante` on((`matricula`.`id` = `estudiante`.`matricula_id`))) join `usuario` on((`estudiante`.`usuario_id` = `usuario`.`id`))) join `materia` on((`matricula`.`materia_id` = `materia`.`id`)));

-- ----------------------------
-- View structure for listfaculty
-- ----------------------------
DROP VIEW IF EXISTS `listfaculty`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `listfaculty` AS select `facultad`.`nombre` AS `facultad`,`centro`.`nombre` AS `centro` from (`centro` join `facultad` on((`centro`.`id` = `facultad`.`centro_id`)));

-- ----------------------------
-- Function structure for change_student_status
-- ----------------------------
DROP FUNCTION IF EXISTS `change_student_status`;
delimiter ;;
CREATE FUNCTION `change_student_status`(user_id INTEGER, repitencia BOOLEAN)
 RETURNS int
  DETERMINISTIC
BEGIN

UPDATE `estudiante` SET `esRepitente` = repitencia WHERE `usuario_id` = user_id;



RETURN 1;
END
;;
delimiter ;

-- ----------------------------
-- Function structure for create_initial_types
-- ----------------------------
DROP FUNCTION IF EXISTS `create_initial_types`;
delimiter ;;
CREATE FUNCTION `create_initial_types`()
 RETURNS varchar(45) CHARSET utf8mb3
  DETERMINISTIC
BEGIN

DECLARE role_count INTEGER;
DECLARE professor_type_count INTEGER;
DECLARE assistence_status_count INTEGER;

SELECT count(*) INTO role_count FROM `rol`;

IF !role_count > 0 THEN 
INSERT INTO `rol` SET `value` = 'admin';
INSERT INTO `rol` SET `value` = 'student';
INSERT INTO `rol` SET `value` = 'professor';
END IF;


SELECT count(*) INTO professor_type_count FROM `tipo_profesor`;

IF !professor_type_count > 0 THEN 

INSERT INTO `tipo_profesor` SET `value` = 'Conferencia';
INSERT INTO `tipo_profesor` SET `value` = 'Clase Practica';
INSERT INTO `tipo_profesor` SET `value` = 'Jefe Departamento';

END IF;

SELECT count(*) INTO assistence_status_count FROM `estado_asistencia`;

IF !assistence_status_count > 0 THEN 

INSERT INTO `estado_asistencia` SET `value` = '1', `label` = 'Presente';
INSERT INTO `estado_asistencia` SET `value` = '2', `label` = 'Ausente';
INSERT INTO `estado_asistencia` SET `value` = '3', `label` = 'Justificado';
INSERT INTO `estado_asistencia` SET `value` = '4', `label` = 'Cuartelero';

END IF;


RETURN 'Valores creados correctamente';
END
;;
delimiter ;

-- ----------------------------
-- Function structure for delete_user
-- ----------------------------
DROP FUNCTION IF EXISTS `delete_user`;
delimiter ;;
CREATE FUNCTION `delete_user`(userid INTEGER)
 RETURNS int
  DETERMINISTIC
BEGIN
	
DECLARE role INTEGER;	
DECLARE usertype VARCHAR(45);

SELECT `rol_id` INTO role FROM usuario WHERE `id` = userid;
SELECT `value` INTO usertype FROM rol WHERE `id` = role;

IF usertype = 'student' THEN 
DELETE FROM `asistencia` WHERE `estudiante_usuario_id` = userid;
DELETE FROM `estudiante` WHERE `usuario_id` = userid;

ELSEIF usertype = 'professor' THEN
DELETE FROM `profesor` WHERE `usuario_id` = userid;

END IF;

DELETE FROM `usuario` WHERE `id` = userid;



RETURN 1;
END
;;
delimiter ;

-- ----------------------------
-- Function structure for get_user_type
-- ----------------------------
DROP FUNCTION IF EXISTS `get_user_type`;
delimiter ;;
CREATE FUNCTION `get_user_type`(user_id INTEGER)
 RETURNS varchar(45) CHARSET utf8mb3
  DETERMINISTIC
BEGIN
	
    DECLARE user_role INTEGER;
    DECLARE usertype VARCHAR(45);
    
    SELECT `rol_id` INTO user_role FROM usuario WHERE `id` = user_id;
    
    IF user_role IS NULL THEN RETURN 'El usuario no existe';
    
    END IF;
    
    SELECT `value` INTO usertype FROM rol WHERE `id` = user_role;
    


RETURN usertype;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
