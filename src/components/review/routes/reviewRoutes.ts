import { Router } from "express";
import reviewController from "../controllers/reviewController";
import { validateToken } from "../../auth/middlewares/authMiddleware";

const reviewRoutes = Router();

reviewRoutes.post("/", validateToken, reviewController.createReview);
reviewRoutes.get("/product/:productId", reviewController.getReviewsByProductId);
reviewRoutes.get(
  "/user/:userId",
  validateToken,
  reviewController.getReviewsByUserId
);
reviewRoutes.put("/:id", validateToken, reviewController.updateReview);
reviewRoutes.delete("/:id", validateToken, reviewController.deleteReview);

export default reviewRoutes;
