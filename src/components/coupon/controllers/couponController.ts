import { NextFunction, Request, Response } from "express";
import couponService from "../services/couponService";

class CouponController {
  async createCoupon(req: Request, res: Response, next: NextFunction) {
    try {
      const coupon = await couponService.createCouponService(req.body);

      return res.status(201).json(coupon);
    } catch (err) {
      next(err);
    }
  }

  async getCoupons(req: Request, res: Response) {
    const coupons = await couponService.getCouponsService();

    return res.status(200).json(coupons);
  }

  async getCouponById(req: Request, res: Response) {
    const coupon = await couponService.getCouponByIdService(
      Number(req.params.id)
    );

    return res.status(200).json(coupon);
  }

  async updateCoupon(req: Request, res: Response, next: NextFunction) {
    try {
      const coupon = await couponService.updateCouponService(
        Number(req.params.id),
        req.body
      );

      return res.status(200).json(coupon);
    } catch (err) {
      next(err);
    }
  }

  async deleteCoupon(req: Request, res: Response) {
    const coupon = await couponService.deleteCouponService(
      Number(req.params.id)
    );

    return res.status(200).json(coupon);
  }
}

export default new CouponController();
