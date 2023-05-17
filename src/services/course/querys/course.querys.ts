import { pool } from "../../../database";
import { Course } from "../../../types/course"

const createCourseQuery = async (payload: Course) => {
  const [result] = await pool.query("INSERT INTO curso SET ? ", [payload]);
  return result;
};

const updateCourseQuery = async (id: number, payload: Partial<Course>) => {
  const [result] = await pool.query("UPDATE curso SET ? WHERE id = ? ", [
    payload,
    id,
  ]);
  return result;
};

const listCourseQuery = async () => {
  const [result] = await pool.query("SELECT * FROM curso");

  return result;
};

export const getCourseQuery = async(id: number)=>{
    const [result] = await pool.query("SELECT * FROM curso WHERE id = ?",[id]);
    return result
}

const deleteCourseQuery = async (id: number) => {
  const [result] = await pool.query("DELETE FROM curso WHERE id = ?", [id]);
  return result;
};

const CourseQuerys = {
  createCourseQuery,
  updateCourseQuery,
  listCourseQuery,
  deleteCourseQuery,
  getCourseQuery
};

export default CourseQuerys;
