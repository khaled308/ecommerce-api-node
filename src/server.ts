import express from "express";
import categoryRoutes from "./components/category/routes/categoryRoutes";
import productRoutes from "./components/product/routes/productRoutes";
import authRoutes from "./components/auth/routes/authRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

export default app;
