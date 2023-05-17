
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema assistencedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema assistencedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `assistencedb` DEFAULT CHARACTER SET utf8mb3 ;
USE `assistencedb` ;

-- -----------------------------------------------------
-- Table `assistencedb`.`estado_asistencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`estado_asistencia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` INT NOT NULL,
  `label` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`centro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`centro` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`facultad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`facultad` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `centro_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_facultad_centro_idx` (`centro_id` ASC) VISIBLE,
  CONSTRAINT `fk_facultad_centro`
    FOREIGN KEY (`centro_id`)
    REFERENCES `assistencedb`.`centro` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`carrera`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`carrera` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `facultad_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_carrera_facultad1_idx` (`facultad_id` ASC) VISIBLE,
  CONSTRAINT `fk_carrera_facultad1`
    FOREIGN KEY (`facultad_id`)
    REFERENCES `assistencedb`.`facultad` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`curso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `anno_inicio` INT NOT NULL,
  `anno_fin` INT NOT NULL,
  `carrera_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_curso_carrera1_idx` (`carrera_id` ASC) VISIBLE,
  CONSTRAINT `fk_curso_carrera1`
    FOREIGN KEY (`carrera_id`)
    REFERENCES `assistencedb`.`carrera` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`departamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`departamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `facultad_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_departamento_facultad1_idx` (`facultad_id` ASC) VISIBLE,
  CONSTRAINT `fk_departamento_facultad1`
    FOREIGN KEY (`facultad_id`)
    REFERENCES `assistencedb`.`facultad` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`materia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`materia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `departamento_id` INT NOT NULL,
  `curso_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_materia_departamento1_idx` (`departamento_id` ASC) VISIBLE,
  INDEX `fk_materia_curso1_idx` (`curso_id` ASC) VISIBLE,
  CONSTRAINT `fk_materia_curso1`
    FOREIGN KEY (`curso_id`)
    REFERENCES `assistencedb`.`curso` (`id`),
  CONSTRAINT `fk_materia_departamento1`
    FOREIGN KEY (`departamento_id`)
    REFERENCES `assistencedb`.`departamento` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`matricula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`matricula` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `materia_id` INT NOT NULL,
  PRIMARY KEY (`id`, `materia_id`),
  INDEX `fk_matricula_materia1_idx` (`materia_id` ASC) VISIBLE,
  CONSTRAINT `fk_matricula_materia1`
    FOREIGN KEY (`materia_id`)
    REFERENCES `assistencedb`.`materia` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`rol` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `surname` VARCHAR(255) NULL DEFAULT NULL,
  `ci` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `centro_id` INT NOT NULL,
  `rol_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuario_centro1_idx` (`centro_id` ASC) VISIBLE,
  INDEX `fk_usuario_rol_idx` (`rol_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_centro1`
    FOREIGN KEY (`centro_id`)
    REFERENCES `assistencedb`.`centro` (`id`),
  CONSTRAINT `fk_usuario_rol`
    FOREIGN KEY (`rol_id`)
    REFERENCES `assistencedb`.`rol` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`estudiante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`estudiante` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `esRepitente` TINYINT NOT NULL,
  `usuario_id` INT NOT NULL,
  `matricula_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`),
  INDEX `fk_estudiante_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  INDEX `fk_estudiante_matricula1_idx` (`matricula_id` ASC) VISIBLE,
  CONSTRAINT `fk_estudiante_matricula1`
    FOREIGN KEY (`matricula_id`)
    REFERENCES `assistencedb`.`matricula` (`id`),
  CONSTRAINT `fk_estudiante_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `assistencedb`.`usuario` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`asistencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`asistencia` (
  `estudiante_id` INT NOT NULL AUTO_INCREMENT,
  `estudiante_usuario_id` INT NOT NULL,
  `materia_id` INT NOT NULL,
  `estado_asistencia_id` INT NOT NULL,
  PRIMARY KEY (`estudiante_id`, `estudiante_usuario_id`, `materia_id`),
  INDEX `fk_Asistencia_materia1_idx` (`materia_id` ASC) VISIBLE,
  INDEX `fk_Asistencia_estado_asistencia1_idx` (`estado_asistencia_id` ASC) VISIBLE,
  CONSTRAINT `fk_Asistencia_estado_asistencia1`
    FOREIGN KEY (`estado_asistencia_id`)
    REFERENCES `assistencedb`.`estado_asistencia` (`id`),
  CONSTRAINT `fk_Asistencia_estudiante1`
    FOREIGN KEY (`estudiante_id` , `estudiante_usuario_id`)
    REFERENCES `assistencedb`.`estudiante` (`id` , `usuario_id`),
  CONSTRAINT `fk_Asistencia_materia1`
    FOREIGN KEY (`materia_id`)
    REFERENCES `assistencedb`.`materia` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`tipo_profesor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`tipo_profesor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `assistencedb`.`profesor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`profesor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo_profesor_id` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  `departamento_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`),
  INDEX `fk_profesor_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  INDEX `fk_profesor_departamento1_idx` (`departamento_id` ASC) VISIBLE,
  INDEX `fk_profesor_tipo_profesor_idx` (`tipo_profesor_id` ASC) VISIBLE,
  CONSTRAINT `fk_profesor_departamento1`
    FOREIGN KEY (`departamento_id`)
    REFERENCES `assistencedb`.`departamento` (`id`),
  CONSTRAINT `fk_profesor_tipo_profesor`
    FOREIGN KEY (`tipo_profesor_id`)
    REFERENCES `assistencedb`.`tipo_profesor` (`id`),
  CONSTRAINT `fk_profesor_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `assistencedb`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
