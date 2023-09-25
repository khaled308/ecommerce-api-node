import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import categoryRoutes from "./components/category/routes/categoryRoutes";
import productRoutes from "./components/product/routes/productRoutes";
import authRoutes from "./components/auth/routes/authRoutes";
import reviewRoutes from "./components/review/routes/reviewRoutes";
import wishlistRoutes from "./components/wishlist/routes/wishlistRoutes";
import couponRoutes from "./components/coupon/routes/couponRoutes";
import cartRoutes from "./components/cart/routes/cartRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/cart", cartRoutes);

// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: any) {
  res.status(404).send("Not Found");
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
