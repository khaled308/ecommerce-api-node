import { Router } from "express";
import categoryController from "../controllers/categoryController";
import { validateAdmin } from "../../auth/middlewares/authMiddleware";

const router = Router();

router
  .route("/")
  .post(validateAdmin, categoryController.createCategory)
  .get(categoryController.getCategories);

router
  .route("/:id")
  .get(categoryController.getCategory)
  .put(validateAdmin, categoryController.updateCategory)
  .delete(validateAdmin, categoryController.deleteCategory);

export default router;
