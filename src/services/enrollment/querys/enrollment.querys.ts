import { pool } from "../../../database";
import { Enrollment } from "../../../types/enrollment";

const createEnrollmentQuery = async (payload: Enrollment) => {
  const [result] = await pool.query("INSERT INTO matricula SET ? ", [payload]);
  return result;
};

const updateEnrollmentQuery = async (id: number, payload: Partial<Enrollment>) => {
  const [result] = await pool.query("UPDATE matricula SET ? WHERE id = ? ", [
    payload,
    id,
  ]);
  return result;
};

const listEnrollmentQuery = async () => {
  const [result] = await pool.query("SELECT * FROM matricula");

  return result;
};

export const getEnrollmentQuery = async(id: number)=>{
    const [result] = await pool.query("SELECT * FROM matricula WHERE id = ?",[id]);
    return result
}

const deleteEnrollmentQuery = async (id: number) => {
  const [result] = await pool.query("DELETE FROM matricula WHERE id = ?", [id]);
  return result;
};

const EnrollmentQuerys = {
  createEnrollmentQuery,
  updateEnrollmentQuery,
  listEnrollmentQuery,
  deleteEnrollmentQuery,
  getEnrollmentQuery
};

export default EnrollmentQuerys;
