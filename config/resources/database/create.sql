

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema assistencedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema assistencedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `assistencedb` DEFAULT CHARACTER SET utf8 ;
USE `assistencedb` ;

-- -----------------------------------------------------
-- Table `assistencedb`.`centro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`centro` (
  `id` INT NOT NULL ,
  `nombre` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

  ALTER TABLE `assistencedb`.`centro`
  MODIFY `id` INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1

ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `assistencedb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`usuario` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `surname` VARCHAR(255) NULL,
  `ci` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `centro_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuario_centro1_idx` (`centro_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_centro1`
    FOREIGN KEY (`centro_id`)
    REFERENCES `assistencedb`.`centro` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

  ALTER TABLE `assistencedb`.`usuario`
  MODIFY `id` INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1

ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `assistencedb`.`facultad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`facultad` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `centro_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_facultad_centro_idx` (`centro_id` ASC) VISIBLE,
  CONSTRAINT `fk_facultad_centro`
    FOREIGN KEY (`centro_id`)
    REFERENCES `assistencedb`.`centro` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

  ALTER TABLE `assistencedb`.`facultad`
  MODIFY `id` INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `assistencedb`.`departamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`departamento` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `facultad_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_departamento_facultad1_idx` (`facultad_id` ASC) VISIBLE,
  CONSTRAINT `fk_departamento_facultad1`
    FOREIGN KEY (`facultad_id`)
    REFERENCES `assistencedb`.`facultad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

  ALTER TABLE `assistencedb`.`departamento`
  MODIFY `id` INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `assistencedb`.`carrera`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`carrera` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `facultad_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_carrera_facultad1_idx` (`facultad_id` ASC) VISIBLE,
  CONSTRAINT `fk_carrera_facultad1`
    FOREIGN KEY (`facultad_id`)
    REFERENCES `assistencedb`.`facultad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

  ALTER TABLE `assistencedb`.`carrera`
  MODIFY `id` INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `assistencedb`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`curso` (
  `id` INT NOT NULL,
  `anno_inicio` INT NOT NULL,
  `anno_fin` INT NOT NULL,
  `carrera_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_curso_carrera1_idx` (`carrera_id` ASC) VISIBLE,
  CONSTRAINT `fk_curso_carrera1`
    FOREIGN KEY (`carrera_id`)
    REFERENCES `assistencedb`.`carrera` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

  ALTER TABLE `assistencedb`.`curso`
  MODIFY `id` INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `assistencedb`.`materia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`materia` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `departamento_id` INT NOT NULL,
  `curso_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_materia_departamento1_idx` (`departamento_id` ASC) VISIBLE,
  INDEX `fk_materia_curso1_idx` (`curso_id` ASC) VISIBLE,
  CONSTRAINT `fk_materia_departamento1`
    FOREIGN KEY (`departamento_id`)
    REFERENCES `assistencedb`.`departamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_materia_curso1`
    FOREIGN KEY (`curso_id`)
    REFERENCES `assistencedb`.`curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

  ALTER TABLE `assistencedb`.`materia`
  MODIFY `id` INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `assistencedb`.`matricula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`matricula` (
  `id` INT NOT NULL,
  `materia_id` INT NOT NULL,
  PRIMARY KEY (`id`, `materia_id`),
  INDEX `fk_matricula_materia1_idx` (`materia_id` ASC) VISIBLE,
  CONSTRAINT `fk_matricula_materia1`
    FOREIGN KEY (`materia_id`)
    REFERENCES `assistencedb`.`materia` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

  ALTER TABLE `assistencedb`.`matricula`
  MODIFY `id` INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `assistencedb`.`estudiante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`estudiante` (
  `id` INT NOT NULL,
  `esRepitente` TINYINT NOT NULL,
  `usuario_id` INT NOT NULL,
  `matricula_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`),
  INDEX `fk_estudiante_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  INDEX `fk_estudiante_matricula1_idx` (`matricula_id` ASC) VISIBLE,
  CONSTRAINT `fk_estudiante_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `assistencedb`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_estudiante_matricula1`
    FOREIGN KEY (`matricula_id`)
    REFERENCES `assistencedb`.`matricula` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

  ALTER TABLE `assistencedb`.`estudiante`
  MODIFY `id` INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `assistencedb`.`profesor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assistencedb`.`profesor` (
  `id` INT NOT NULL,
  `rol` VARCHAR(255) NOT NULL,
  `usuario_id` INT NOT NULL,
  `departamento_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`),
  INDEX `fk_profesor_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  INDEX `fk_profesor_departamento1_idx` (`departamento_id` ASC) VISIBLE,
  CONSTRAINT `fk_profesor_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `assistencedb`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profesor_departamento1`
    FOREIGN KEY (`departamento_id`)
    REFERENCES `assistencedb`.`departamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

  ALTER TABLE `assistencedb`.`profesor`
  MODIFY `id` INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
