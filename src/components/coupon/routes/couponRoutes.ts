import { Router } from "express";
import couponController from "../controllers/couponController";
import { validateAdmin } from "../../auth/middlewares/authMiddleware";

const couponRoutes = Router();

couponRoutes.use(validateAdmin);

couponRoutes
  .route("/")
  .post(couponController.createCoupon)
  .get(couponController.getCoupons);

couponRoutes
  .route("/:id")
  .get(couponController.getCouponById)
  .put(couponController.updateCoupon)
  .delete(couponController.deleteCoupon);

export default couponRoutes;
