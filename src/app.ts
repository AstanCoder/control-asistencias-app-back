import express, { Express, Request, Response, json } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import router from "./routes/routes";

dotenv.config();

const app: Express = express();

app.use(express.static(path.join(__dirname, "./public")));

app.use(json());

app.use(
  cors({
    allowedHeaders: "*",
    origin: "*",
  })
);

app.use("/", router)

const PORT = process.env.PORT || 8080;

app.set("port", PORT);

export default app;
