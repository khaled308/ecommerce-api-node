import { Request, Response } from "express";
import authService from "../services/authService";
import sendEmail from "../../../shared/services/sendEmail";
import config from "../../../config";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await authService.loginService({ email, password });
      return res.status(200).json(user);
    } catch (err) {
      const { message = "something went wrong" } = err as { message?: string };
      return res.status(400).json({ message });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { email, password, name } = req.body;
      const user = await authService.registerService({ email, password, name });
      return res.status(200).json(user);
    } catch (err) {
      const { message = "something went wrong" } = err as { message?: string };
      return res.status(400).json({ message });
    }
  }

  async createResetPasswordToken(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const token = await authService.createResetPasswordTokenService({
        email,
      });
      sendEmail(
        email,
        "Reset Password",
        `<a href="${config.websiteURL}/reset-password/${token.resetPasswordToken}">Reset Password</a>`
      );

      return res.status(200).json(token);
    } catch (err) {
      const { message = "something went wrong" } = err as { message?: string };
      return res.status(400).json({ message });
    }
  }

  async resetPassword(req: Request, res: Response) {
    try {
      const { token, password } = req.body;
      const user = await authService.resetPasswordService({ token, password });
      return res.status(200).json(user);
    } catch (err) {
      const { message = "something went wrong" } = err as { message?: string };
      return res.status(400).json({ message });
    }
  }
}

export default new AuthController();
