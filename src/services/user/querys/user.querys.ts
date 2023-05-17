import { pool } from "../../../database";
import { User } from "../../../types/user";

const createUserQuery = async (payload: User) => {
  const [result] = await pool.query("INSERT INTO usuario SET ? ", [payload]);
  return result;
};

const updateUserQuery = async (id: number, payload: Partial<User>) => {
  const [result] = await pool.query("UPDATE usuario SET ? WHERE id = ? ", [
    payload,
    id,
  ]);
  return result;
};

const listUserQuery = async () => {
  const [result] = await pool.query("SELECT * FROM usuario");

  return result;
};

export const getUserQuery = async(id: number)=>{
    const [result] = await pool.query("SELECT * FROM usuario WHERE id = ?",[id]);
    return result
}

const deleteUserQuery = async (id: number) => {
  const [result] = await pool.query("DELETE FROM usuario WHERE id = ?", [id]);
  return result;
};

const UserQuerys = {
  createUserQuery,
  updateUserQuery,
  listUserQuery,
  deleteUserQuery,
  getUserQuery
};

export default UserQuerys;
