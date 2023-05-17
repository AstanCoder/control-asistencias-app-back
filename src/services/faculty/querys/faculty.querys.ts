import { pool } from "../../../database";
import { Faculty } from "../../../types/faculty";

const createFacultyQuery = async (payload: Faculty) => {
  const [result] = await pool.query("INSERT INTO facultad SET ? ", [payload]);
  return result;
};

const updateFacultyQuery = async (id: number, payload: Partial<Faculty>) => {
  const [result] = await pool.query("UPDATE facultad SET ? WHERE id = ? ", [
    payload,
    id,
  ]);
  return result;
};

const listFacultyQuery = async () => {
  const [result] = await pool.query("SELECT * FROM facultad");

  return result;
};

export const getFacultyQuery = async(id: number)=>{
    const [result] = await pool.query("SELECT * FROM facultad WHERE id = ?",[id]);
    return result
}

const deleteFacultyQuery = async (id: number) => {
  const [result] = await pool.query("DELETE FROM facultad WHERE id = ?", [id]);
  return result;
};

const FacultyQuerys = {
  createFacultyQuery,
  updateFacultyQuery,
  listFacultyQuery,
  deleteFacultyQuery,
  getFacultyQuery
};

export default FacultyQuerys;
