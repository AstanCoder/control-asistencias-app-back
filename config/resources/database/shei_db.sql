/*
 Navicat Premium Data Transfer

 Source Server         : postgre local
 Source Server Type    : PostgreSQL
 Source Server Version : 150000 (150000)
 Source Host           : localhost:5432
 Source Catalog        : registro_proyectos_db
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150000 (150000)
 File Encoding         : 65001

 Date: 22/05/2023 13:30:44
*/


-- ----------------------------
-- Sequence structure for sequence_cliente_id
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sequence_cliente_id";
CREATE SEQUENCE "public"."sequence_cliente_id" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sequence_equipo_id
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sequence_equipo_id";
CREATE SEQUENCE "public"."sequence_equipo_id" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sequence_estado_tarea_id
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sequence_estado_tarea_id";
CREATE SEQUENCE "public"."sequence_estado_tarea_id" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sequence_proyecto_id
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sequence_proyecto_id";
CREATE SEQUENCE "public"."sequence_proyecto_id" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sequence_tarea_id
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sequence_tarea_id";
CREATE SEQUENCE "public"."sequence_tarea_id" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sequence_tipo_usuario_id
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sequence_tipo_usuario_id";
CREATE SEQUENCE "public"."sequence_tipo_usuario_id" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sequence_usuario_id
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sequence_usuario_id";
CREATE SEQUENCE "public"."sequence_usuario_id" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for cliente
-- ----------------------------
DROP TABLE IF EXISTS "public"."cliente";
CREATE TABLE "public"."cliente" (
  "id" int4 NOT NULL DEFAULT nextval('sequence_cliente_id'::regclass),
  "nombre" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for equipo
-- ----------------------------
DROP TABLE IF EXISTS "public"."equipo";
CREATE TABLE "public"."equipo" (
  "id" int4 NOT NULL DEFAULT nextval('sequence_equipo_id'::regclass),
  "nombre" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for estado_tarea
-- ----------------------------
DROP TABLE IF EXISTS "public"."estado_tarea";
CREATE TABLE "public"."estado_tarea" (
  "id" int4 NOT NULL DEFAULT nextval('sequence_estado_tarea_id'::regclass),
  "valor" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for informe_proyecto
-- ----------------------------
DROP TABLE IF EXISTS "public"."informe_proyecto";
CREATE TABLE "public"."informe_proyecto" (
  "proyecto_id" int4 NOT NULL,
  "detalles" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for informe_tiempo
-- ----------------------------
DROP TABLE IF EXISTS "public"."informe_tiempo";
CREATE TABLE "public"."informe_tiempo" (
  "tarea_id" int4 NOT NULL,
  "detalles" int4 NOT NULL
)
;

-- ----------------------------
-- Table structure for progreso_tarea
-- ----------------------------
DROP TABLE IF EXISTS "public"."progreso_tarea";
CREATE TABLE "public"."progreso_tarea" (
  "tarea_id" int4 NOT NULL,
  "progreso_tarea" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nota" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for proyecto
-- ----------------------------
DROP TABLE IF EXISTS "public"."proyecto";
CREATE TABLE "public"."proyecto" (
  "id" int4 NOT NULL DEFAULT nextval('sequence_proyecto_id'::regclass),
  "nombre" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "descripcion" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "fecha_finalizacion_estimada" timestamptz(6) NOT NULL,
  "cliente_id" int4
)
;

-- ----------------------------
-- Table structure for registro_tiempo
-- ----------------------------
DROP TABLE IF EXISTS "public"."registro_tiempo";
CREATE TABLE "public"."registro_tiempo" (
  "tarea_id" int4 NOT NULL,
  "tiempo" time(6) NOT NULL
)
;

-- ----------------------------
-- Table structure for resumen_tarea
-- ----------------------------
DROP TABLE IF EXISTS "public"."resumen_tarea";
CREATE TABLE "public"."resumen_tarea" (
  "tarea_id" int4 NOT NULL,
  "fecha_completada" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "tiempo_total" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "detalles" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for tarea
-- ----------------------------
DROP TABLE IF EXISTS "public"."tarea";
CREATE TABLE "public"."tarea" (
  "proyecto_id" int4 NOT NULL DEFAULT nextval('sequence_tarea_id'::regclass),
  "usuario_id" int4 NOT NULL,
  "nombre" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "descripcion" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  " registro_tiempo_id" int4 NOT NULL,
  "id" int4 NOT NULL,
  "estado_tarea_id" int4 NOT NULL
)
;

-- ----------------------------
-- Table structure for tipo_usuario
-- ----------------------------
DROP TABLE IF EXISTS "public"."tipo_usuario";
CREATE TABLE "public"."tipo_usuario" (
  "id" int4 NOT NULL DEFAULT nextval('sequence_tipo_usuario_id'::regclass),
  "valor" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS "public"."usuario";
CREATE TABLE "public"."usuario" (
  "id" int4 NOT NULL DEFAULT nextval('sequence_usuario_id'::regclass),
  "nombre" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "tipo_usuario_id" int4 NOT NULL,
  "equipo_id" int4
)
;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."sequence_cliente_id"
OWNED BY "public"."cliente"."id";
SELECT setval('"public"."sequence_cliente_id"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."sequence_equipo_id"
OWNED BY "public"."equipo"."id";
SELECT setval('"public"."sequence_equipo_id"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."sequence_estado_tarea_id"
OWNED BY "public"."estado_tarea"."id";
SELECT setval('"public"."sequence_estado_tarea_id"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."sequence_proyecto_id"
OWNED BY "public"."proyecto"."id";
SELECT setval('"public"."sequence_proyecto_id"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."sequence_tarea_id"
OWNED BY "public"."tarea"."id";
SELECT setval('"public"."sequence_tarea_id"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."sequence_tipo_usuario_id"
OWNED BY "public"."tipo_usuario"."id";
SELECT setval('"public"."sequence_tipo_usuario_id"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."sequence_usuario_id"
OWNED BY "public"."usuario"."id";
SELECT setval('"public"."sequence_usuario_id"', 1, false);

-- ----------------------------
-- Primary Key structure for table cliente
-- ----------------------------
ALTER TABLE "public"."cliente" ADD CONSTRAINT "cliente_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table equipo
-- ----------------------------
ALTER TABLE "public"."equipo" ADD CONSTRAINT "equipo_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table estado_tarea
-- ----------------------------
ALTER TABLE "public"."estado_tarea" ADD CONSTRAINT "estado_tarea_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table informe_proyecto
-- ----------------------------
ALTER TABLE "public"."informe_proyecto" ADD CONSTRAINT "informe_proyecto_pkey" PRIMARY KEY ("proyecto_id");

-- ----------------------------
-- Primary Key structure for table informe_tiempo
-- ----------------------------
ALTER TABLE "public"."informe_tiempo" ADD CONSTRAINT "informe_tiempo_pkey" PRIMARY KEY ("tarea_id");

-- ----------------------------
-- Primary Key structure for table progreso_tarea
-- ----------------------------
ALTER TABLE "public"."progreso_tarea" ADD CONSTRAINT "progreso_tarea_pkey" PRIMARY KEY ("tarea_id");

-- ----------------------------
-- Primary Key structure for table proyecto
-- ----------------------------
ALTER TABLE "public"."proyecto" ADD CONSTRAINT "proyecto_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table registro_tiempo
-- ----------------------------
ALTER TABLE "public"."registro_tiempo" ADD CONSTRAINT "registro_tiempo_pkey" PRIMARY KEY ("tarea_id");

-- ----------------------------
-- Primary Key structure for table resumen_tarea
-- ----------------------------
ALTER TABLE "public"."resumen_tarea" ADD CONSTRAINT "resumen_tarea_pkey" PRIMARY KEY ("tarea_id");

-- ----------------------------
-- Primary Key structure for table tarea
-- ----------------------------
ALTER TABLE "public"."tarea" ADD CONSTRAINT "tarea_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tipo_usuario
-- ----------------------------
ALTER TABLE "public"."tipo_usuario" ADD CONSTRAINT "tipo_usuario_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table usuario
-- ----------------------------
ALTER TABLE "public"."usuario" ADD CONSTRAINT "usuario_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table informe_proyecto
-- ----------------------------
ALTER TABLE "public"."informe_proyecto" ADD CONSTRAINT "fk_informe_proyecto_proyecto_1" FOREIGN KEY ("proyecto_id") REFERENCES "public"."proyecto" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table informe_tiempo
-- ----------------------------
ALTER TABLE "public"."informe_tiempo" ADD CONSTRAINT "fk_informe_tiempo_tarea_1" FOREIGN KEY ("tarea_id") REFERENCES "public"."tarea" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table progreso_tarea
-- ----------------------------
ALTER TABLE "public"."progreso_tarea" ADD CONSTRAINT "fk_progreso_tarea_tarea_1" FOREIGN KEY ("tarea_id") REFERENCES "public"."tarea" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table proyecto
-- ----------------------------
ALTER TABLE "public"."proyecto" ADD CONSTRAINT "fk_proyecto_cliente_1" FOREIGN KEY ("cliente_id") REFERENCES "public"."cliente" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table registro_tiempo
-- ----------------------------
ALTER TABLE "public"."registro_tiempo" ADD CONSTRAINT "fk_registro_tiempo_tarea_1" FOREIGN KEY ("tarea_id") REFERENCES "public"."tarea" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table resumen_tarea
-- ----------------------------
ALTER TABLE "public"."resumen_tarea" ADD CONSTRAINT "fk_resumen_tarea_tarea_1" FOREIGN KEY ("tarea_id") REFERENCES "public"."tarea" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tarea
-- ----------------------------
ALTER TABLE "public"."tarea" ADD CONSTRAINT "fk_tarea_estado_tarea_1" FOREIGN KEY ("estado_tarea_id") REFERENCES "public"."estado_tarea" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tarea" ADD CONSTRAINT "fk_tarea_proyecto_1" FOREIGN KEY ("proyecto_id") REFERENCES "public"."proyecto" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tarea" ADD CONSTRAINT "fk_tarea_usuario_1" FOREIGN KEY ("usuario_id") REFERENCES "public"."usuario" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table usuario
-- ----------------------------
ALTER TABLE "public"."usuario" ADD CONSTRAINT "fk_usuario_equipo_1" FOREIGN KEY ("equipo_id") REFERENCES "public"."equipo" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."usuario" ADD CONSTRAINT "fk_usuario_tipo_usuario_1" FOREIGN KEY ("tipo_usuario_id") REFERENCES "public"."tipo_usuario" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
