import { RowDataPacket } from "mysql2";
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

export const getUserQuery = async (id: number) => {
  const [result] = await pool.query("SELECT * FROM usuario WHERE id = ?", [id]);
  return result;
};

const deleteUserQuery = async (id: number) => {
  const [result] = await pool.query("DELETE FROM usuario WHERE id = ?", [id]);
  return result;
};

const getUserDataQuery = async (id: number) => {
  let userdata = {};
  const [res]: RowDataPacket[] = <RowDataPacket[]>(
    await pool.query(
      "SELECT id, name, surname, ci, rol_id FROM usuario WHERE id = ?",
      [id]
    )
  );

  const [role]: RowDataPacket[] = <RowDataPacket[]>(
    await pool.query("SELECT value FROM rol WHERE id = ?", [res[0].rol_id])
  );

  if (role[0].value === "student") {
    const [studentdata]: RowDataPacket[] = <RowDataPacket[]>(
      await pool.query(
        "SELECT esRepitente FROM estudiante WHERE usuario_id = ?",
        [id]
      )
    );
    userdata = { ...studentdata[0] };
  }
  if (role[0].value === "professor") {
    const [professor]: RowDataPacket[] = <RowDataPacket[]>(
      await pool.query(
        "SELECT departamento_id, tipo_profesor_id FROM profesor WHERE usuario_id = ?",
        [id]
      )
    );
    const [professor_type]: RowDataPacket[] = <RowDataPacket[]>(
      await pool.query("SELECT value FROM tipo_profesor WHERE id = ? ", [
        professor[0].tipo_profesor_id,
      ])
    );
    const [department]: RowDataPacket[] = <RowDataPacket[]>(
      await pool.query("SELECT nombre FROM departamento WHERE id = ?", [
        professor[0].departamento_id,
      ])
    );
    userdata = { ...professor[0], tipo_profesor: professor_type[0].value, departamento: department[0].nombre };
  }

  return {
    role: role[0].value,
    ...res[0],
    ...userdata,
  };
};

const UserQuerys = {
  createUserQuery,
  updateUserQuery,
  listUserQuery,
  deleteUserQuery,
  getUserQuery,
  getUserDataQuery,
};

export default UserQuerys;
