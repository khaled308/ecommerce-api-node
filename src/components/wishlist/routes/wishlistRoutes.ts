import { Router } from "express";
import { validateToken } from "../../auth/middlewares/authMiddleware";
import wishlistController from "../controllers/wishlistController";

const wishlistRoutes = Router();

wishlistRoutes
  .route("/")
  .get(validateToken, wishlistController.getWishlist)
  .post(validateToken, wishlistController.addProductToWishlist)
  .delete(validateToken, wishlistController.clearWishlist);

wishlistRoutes
  .route("/:productId")
  .delete(validateToken, wishlistController.removeProductFromWishlist);

export default wishlistRoutes;
