import { pool } from "../../../database";
import { Carreer } from "../../../types/carreer";

const createCarreerQuery = async (payload: Carreer) => {
  const [result] = await pool.query("INSERT INTO carrera SET ? ", [payload]);
  return result;
};

const updateCarreerQuery = async (id: number, payload: Partial<Carreer>) => {
  const [result] = await pool.query("UPDATE asstencia SET ? WHERE id = ? ", [
    payload,
    id,
  ]);
  return result;
};

const listCarrerQuery = async () => {
  const [result] = await pool.query("SELECT * FROM carrera");

  return result;
};

const deleteCarreerQuery = async (id: number) => {
  const [result] = await pool.query("DELETE FROM carrera WHERE id = ?", [id]);
  return result;
};


export const getCarreerQuery = async(id: number)=>{
  const [result] = await pool.query("SELECT * FROM carrera WHERE id = ?",[id]);
  return result
}


const carreerQuerys = {
  createCarreerQuery,
  updateCarreerQuery,
  listCarrerQuery,
  deleteCarreerQuery,
  getCarreerQuery
};

export default carreerQuerys;
