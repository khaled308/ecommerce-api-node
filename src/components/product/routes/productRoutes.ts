import { Router } from "express";
import productController from "../controllers/productController";
import upload from "../../../shared/utils/multer";

const router = Router();

router
  .route("/")
  .get(productController.getProducts)
  .post(upload.single("image"), productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .put(upload.single("image"), productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
