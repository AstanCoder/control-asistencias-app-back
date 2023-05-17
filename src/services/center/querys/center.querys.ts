import { pool } from "../../../database";
import { Center } from "../../../types/center";

const createCenterQuery = async (payload: Center) => {
  const [result] = await pool.query("INSERT INTO centro SET ? ", [payload]);
  return result;
};

const updateCenterQuery = async (id: number, payload: Partial<Center>) => {
  const [result] = await pool.query("UPDATE centro SET ? WHERE id = ? ", [
    payload,
    id,
  ]);
  return result;
};

const listCenterQuery = async () => {
  const [result] = await pool.query("SELECT * FROM centro");

  return result;
};

export const getCenterQuery = async(id: number)=>{
    const [result] = await pool.query("SELECT * FROM centro WHERE id = ?",[id]);
    return result
}

const deleteCenterQuery = async (id: number) => {
  const [result] = await pool.query("DELETE FROM centro WHERE id = ?", [id]);
  return result;
};

const CenterQuerys = {
  createCenterQuery,
  updateCenterQuery,
  listCenterQuery,
  deleteCenterQuery,
  getCenterQuery
};

export default CenterQuerys;
