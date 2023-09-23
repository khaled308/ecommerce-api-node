import express from "express";
import categoryRoutes from "./components/category/routes/categoryRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/categories", categoryRoutes);

export default app;
