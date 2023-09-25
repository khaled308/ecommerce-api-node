import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../../config";
import User from "../../user/models/User";

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["access_token"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwt.verify(token, config.jwtSecret as string) as JwtPayload;
  if (!decoded || !decoded.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await User.findByPk(decoded.userId);
  req.body.userId = decoded.userId;
  req.body.isAdmin = user?.role === "admin";
  next();
};

export const validateAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["access_token"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwt.verify(token, config.jwtSecret as string) as JwtPayload;
  if (!decoded || !decoded.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await User.findByPk(decoded.userId);

  if (!user || user.role !== "admin") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.body.userId = decoded.userId;
  next();
};
