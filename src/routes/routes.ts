import { Router } from "express";
import authRouter from "../services/auth/routes";
import userRouter from "../services/user/routes";
import carreerRouter from "../services/carreer/routes";
import centerRouter from "../services/center/routes";
import courseRouter from "../services/course/routes";
import deparmentRouter from "../services/deparment/routes";
import enrollmentRouter from "../services/enrollment/routes";
import facultyRouter from "../services/faculty/routes";
import semesterRouter from "../services/semester/routes";
import subjectRouter from "../services/subject/routes";
import assistenceRouter from "../services/assistence/routes";

const router = Router();

router.use("/auth", authRouter);
router.use(userRouter);
router.use(carreerRouter);
router.use(centerRouter);
router.use(courseRouter);
router.use(deparmentRouter);
router.use(enrollmentRouter);
router.use(facultyRouter);
router.use(semesterRouter);
router.use(subjectRouter);
router.use(userRouter);
router.use("/assistence", assistenceRouter);

export default router;
