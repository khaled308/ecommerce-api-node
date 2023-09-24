import express from "express";
import categoryRoutes from "./components/category/routes/categoryRoutes";
import productRoutes from "./components/product/routes/productRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

export default app;
