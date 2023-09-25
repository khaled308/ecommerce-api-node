import { Router } from "express";
import cartController from "../controllers/cartController";
import { validateToken } from "../../auth/middlewares/authMiddleware";

const cartRoutes = Router();

cartRoutes.use(validateToken);

cartRoutes
  .route("/")
  .get(cartController.getCart)
  .post(cartController.addToCart)
  .delete(cartController.clearCart);

cartRoutes
  .route("/:productId")
  .put(cartController.updateCart)
  .delete(cartController.removeItem);

export default cartRoutes;
