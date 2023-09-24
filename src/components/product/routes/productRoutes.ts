import { Router } from "express";
import productController from "../controllers/productController";
import upload from "../../../shared/utils/multer";
import { validateAdmin } from "../../auth/middlewares/authMiddleware";

const router = Router();

router
  .route("/")
  .get(productController.getProducts)
  .post(upload.single("image"), validateAdmin, productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .put(upload.single("image"), validateAdmin, productController.updateProduct)
  .delete(validateAdmin, productController.deleteProduct);

export default router;
