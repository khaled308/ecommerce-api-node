import { Router } from "express";
import authController from "../controllers/authController";

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/logout", authController.logout);
router.post(
  "/create-reset-password-token",
  authController.createResetPasswordToken
);
router.post("/reset-password", authController.resetPassword);

export default router;
