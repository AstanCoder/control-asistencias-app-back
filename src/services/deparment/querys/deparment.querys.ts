import { pool } from "../../../database";
import { Department } from "../../../types/department";

const createDepartmentQuery = async (payload: Department) => {
  const [result] = await pool.query("INSERT INTO departamento SET ? ", [payload]);
  return result;
};

const updateDepartmentQuery = async (
  id: number,
  payload: Partial<Department>
) => {
  const [result] = await pool.query("UPDATE departamento SET ? WHERE id = ? ", [
    payload,
    id,
  ]);
  return result;
};

const listDepartmentQuery = async () => {
  const [result] = await pool.query("SELECT * FROM departamento");

  return result;
};

export const getDepartmentQuery = async (id: number) => {
  const [result] = await pool.query("SELECT * FROM departamento WHERE id = ?", [id]);
  return result
};

const deleteDepartmentQuery = async (id: number) => {
  const [result] = await pool.query("DELETE FROM departamento WHERE id = ?", [id]);
  return result;
};

const DepartmentQuerys = {
  createDepartmentQuery,
  updateDepartmentQuery,
  listDepartmentQuery,
  deleteDepartmentQuery,
  getDepartmentQuery
};

export default DepartmentQuerys;
