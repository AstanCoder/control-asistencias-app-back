import { pool } from "../../../database";
import { CreateUserPayload, RegisterPayload } from "../../../types/auth";
import { CreateProfessorPayload } from "../../../types/professor";
import {
  CreateStudentPayload,
  ProfessorCreateStudentPayload,
} from "../../../types/student";
import bcrypt from "bcrypt";

export const createUserQuery = async (
  payload: CreateUserPayload
): Promise<object> => {
  const [result] = await pool.query("INSERT INTO usuario SET ? ", payload);

  return result;
};

export const fillProfessorInfoQuery = async (
  payload: CreateProfessorPayload
) => {
  const [result] = await pool.query("INSERT INTO profesor SET ? ", payload);

  return result;
};

export const fillStudentInfoQuery = async (payload: CreateStudentPayload) => {
  const [result] = await pool.query("INSERT INTO estudiante SET ? ", payload);

  return result;
};

export const searchUserByIdQuery = async (id: number) => {
  const [result] = await pool.query(
    "SELECT id, email FROM usuario WHERE id = ? ",
    [id]
  );

  return result;
};

export const searchUserByEmailQuery = async (email: string) => {
  const [result] = await pool.query(
    "SELECT id, email, password FROM usuario WHERE email = ? ",
    [email]
  );

  return result;
};

export const createStudentQuery = async (
  payload: ProfessorCreateStudentPayload
) => {
  const { esRepitente, matricula_id } = payload;

  const { name, surname, password, email, ci, centro_id, rol_id } = <
    CreateUserPayload
  >payload;

  const salts = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salts);

  const userdata = {
    name,
    surname,
    password: hash,
    email,
    ci,
    centro_id,
    rol_id,
  };

  const [user] = await pool.query("INSERT INTO usuario SET ? ", [userdata]);

  const created_user = await searchUserByEmailQuery(userdata.email);
  const _created_user: any = created_user;
  const user_id = _created_user[0].id;

  const student_data = {
    usuario_id: user_id,
    matricula_id,
    esRepitente: esRepitente,
  };

  const [student] = await pool.query("INSERT INTO estudiante SET ?", [
    student_data,
  ]);

  console.log(student);

  return student;
};

export const createProfessorQuery = async (payload: CreateProfessorPayload) => {
  const { tipo_profesor_id, departamento_id } = payload;

  const { name, surname, password, email, ci, centro_id, rol_id } = <
    CreateUserPayload
  >payload;

  const salts = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salts);

  const userdata = {
    name,
    surname,
    password: hash,
    email,
    ci,
    centro_id,
    rol_id,
  };

  const [user] = await pool.query("INSERT INTO usuario SET ? ", [userdata]);

  const created_user = await searchUserByEmailQuery(userdata.email);
  const _created_user: any = created_user;
  const user_id = _created_user[0].id;

  const professor_data = {
    usuario_id: user_id,
    tipo_profesor_id,
    departamento_id,
  };

  const [professor] = await pool.query("INSERT INTO profesor SET ?", [
    professor_data,
  ]);

  

  return professor;
};


