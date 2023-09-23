import { Router } from "express";
import categoryController from "../controllers/categoryController";

const router = Router();

router
  .route("/")
  .post(categoryController.createCategory)
  .get(categoryController.getCategories);

router
  .route("/:id")
  .get(categoryController.getCategory)
  .put(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

export default router;
