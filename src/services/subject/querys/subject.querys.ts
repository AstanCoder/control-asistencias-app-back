import { pool } from "../../../database";
import { Subject } from "../../../types/subject";

const createSubjectQuery = async (payload: Subject) => {
  const [result] = await pool.query("INSERT INTO materia SET ? ", [payload]);
  return result;
};

const updateSubjectQuery = async (id: number, payload: Partial<Subject>) => {
  const [result] = await pool.query("UPDATE materia SET ? WHERE id = ? ", [
    payload,
    id,
  ]);
  return result;
};

const listSubjectQuery = async () => {
  const [result] = await pool.query("SELECT * FROM materia");

  return result;
};

export const getSubjectQuery = async (id: number) => {
  const [result] = await pool.query("SELECT * FROM materia WHERE id = ?", [id]);
  return result;
};

const deleteSubjectQuery = async (id: number) => {
  const [result] = await pool.query("DELETE FROM materia WHERE id = ?", [id]);
  return result;
};

const SubjectQuerys = {
  createSubjectQuery,
  updateSubjectQuery,
  listSubjectQuery,
  deleteSubjectQuery,
  getSubjectQuery
};

export default SubjectQuerys;
