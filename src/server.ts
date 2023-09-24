import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import categoryRoutes from "./components/category/routes/categoryRoutes";
import productRoutes from "./components/product/routes/productRoutes";
import authRoutes from "./components/auth/routes/authRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

export default app;
