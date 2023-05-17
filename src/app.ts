import express, { Express, Request, Response, json } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import router from "./routes/routes";

dotenv.config();

const app: Express = express();

app.use(express.json())

app.use("/api", router);
app.use("/", express.static(path.join(__dirname, "./public")));

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(json());

app.use(
  cors({
    allowedHeaders: "*",
    origin: "*",
  })
);

const PORT = process.env.PORT || 8080;

app.set("port", PORT);

export default app;
