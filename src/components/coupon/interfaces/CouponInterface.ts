interface CouponInterface {
  id: number;
  name: string;
  discount: number;
  expiresAt: Date;
  createdAt: Date;
  deletedAt: Date;
}

export default CouponInterface;
