import { pool } from "../../../database";
import { Semester } from "../../../types/semester";

const createSemesterQuery = async (payload: Semester) => {
  const [result] = await pool.query("INSERT INTO semestre SET ? ", [payload]);
  return result;
};

const updateSemesterQuery = async (id: number, payload: Partial<Semester>) => {
  const [result] = await pool.query("UPDATE semestre SET ? WHERE id = ? ", [
    payload,
    id,
  ]);
  return result;
};

const listSemesterQuery = async () => {
  const [result] = await pool.query("SELECT * FROM semestre");

  return result;
};

export const getSemesterQuery = async (id: number) => {
  const [result] = await pool.query("SELECT * FROM semestre WHERE id = ?", [
    id,
  ]);
  return result;
};

const deleteSemesterQuery = async (id: number) => {
  const [result] = await pool.query("DELETE FROM semestre WHERE id = ?", [id]);
  return result;
};

const SemesterQuerys = {
  createSemesterQuery,
  updateSemesterQuery,
  listSemesterQuery,
  deleteSemesterQuery,
  getSemesterQuery,
};

export default SemesterQuerys;
