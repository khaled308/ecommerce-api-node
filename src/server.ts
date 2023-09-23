import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import specs from "./swaggerConfig";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default app;
