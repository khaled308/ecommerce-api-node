import CouponInterface from "../interfaces/CouponInterface";
import Coupon from "../models/Coupon";

class CouponService {
  public async getCouponsService() {
    try {
      const coupons = await Coupon.findAll({});
      return coupons;
    } catch (err) {
      throw err;
    }
  }

  public async getCouponByIdService(id: number) {
    try {
      const coupon = await Coupon.findByPk(id);
      return coupon;
    } catch (err) {
      throw err;
    }
  }

  public async createCouponService(data: Omit<CouponInterface, "id">) {
    try {
      const newCoupon = await Coupon.create(data);
      return newCoupon;
    } catch (err) {
      throw err;
    }
  }

  public async updateCouponService(
    id: number,
    data: Omit<CouponInterface, "id">
  ) {
    try {
      const updatedCoupon = await Coupon.update(data, {
        where: {
          id: id,
        },
      });
      return updatedCoupon;
    } catch (err) {
      throw err;
    }
  }

  public async deleteCouponService(id: number) {
    try {
      const deletedCoupon = await Coupon.destroy({
        where: {
          id: id,
        },
      });
      return deletedCoupon;
    } catch (err) {
      throw err;
    }
  }
}

export default new CouponService();
