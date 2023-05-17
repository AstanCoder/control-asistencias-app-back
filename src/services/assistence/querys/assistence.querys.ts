import { pool } from "../../../database";
import { Assistence } from "../../../types/assistence";

export const createAssistenceQuery = async (payload: Assistence) => {
  const [result] = await pool.query("INSERT INTO asistencia SET ? ", payload);

  return result;
};

export const modifyAssistenceQuery = async (
  payload: Partial<Assistence>,
  user_id: number,
  subject_id: number,
  date: Date
) => {
  const [result] = await pool.query(
    "UPDATE asstencia SET ? WHERE estudiante_usuario_id = ? AND materia_id = ? AND fecha = ?",
    [payload, user_id, subject_id, date]
  );

  return result;
};

export const getAssitenceQuery = async () => {};

export const getAssitencesPerUserQuery = async (userid: number) => {
  const [result] = await pool.query(
    "SELECT * FROM asistencia WHERE estudiante_usuario_id = ?",
    [userid]
  );

  return {
    result,
  };
};

export const getAssitencesPerUserAndSubject = async (
  userid: number,
  subjectid: number
) => {
  const [result] = await pool.query(
    "SELECT * FROM asistencia WHERE estudiante_usuario_id = ? AND materia_id = ?",
    [userid, subjectid]
  );

  return {
    result,
  };
};

export const getAssistencesPerUserSubjectAndDate = async (
  userid: number,
  subjectid: number,
  date: Date
) => {
  const [result] = await pool.query(
    "SELECT * FROM asistencia WHERE estudiante_usuario_id = ? AND materia_id = ? AND fecha = ?",
    [userid, subjectid, date]
  );

  return {
    result,
  };
};
