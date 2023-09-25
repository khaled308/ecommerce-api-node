import { Request, Response } from "express";
import wishlistService from "../services/wishlistService";

class WishlistController {
  public async getWishlist(req: Request, res: Response) {
    const userId = req.body.userId;
    const wishlist = await wishlistService.getWishlistService(userId);

    res.json(wishlist);
  }

  public async addProductToWishlist(req: Request, res: Response) {
    const userId = req.body.userId;
    const productId = req.body.productId;
    const wishlist = await wishlistService.addProductToWishlistService(
      userId,
      productId
    );

    res.json(wishlist);
  }

  public async removeProductFromWishlist(req: Request, res: Response) {
    const userId = req.body.userId;
    const productId = Number(req.params.productId);

    await wishlistService.removeProductFromWishlistService(userId, productId);
    res.json("Product removed from wishlist");
  }

  public async clearWishlist(req: Request, res: Response) {
    const userId = req.body.userId;
    await wishlistService.clearWishlistService(userId);

    res.json("Wishlist cleared");
  }
}

export default new WishlistController();
