import Product from "../../product/models/Product";
import Wishlist from "../models/Wishlist";
import WishlistItem from "../models/WishlistItem";

class WishlistService {
  async addProductToWishlistService(userId: number, productId: number) {
    let wishlist = await Wishlist.findOne({
      where: {
        userId,
      },
    });

    if (!wishlist) {
      wishlist = await Wishlist.create({
        userId,
      });
    }

    const existingItem = await WishlistItem.findOne({
      where: {
        wishlistId: wishlist.get("id"),
        productId,
      },
    });

    if (!existingItem) {
      await WishlistItem.create({
        wishlistId: wishlist.get("id"),
        productId,
      });
    }
    return wishlist;
  }

  async getWishlistService(userId: number) {
    const wishlist = await Wishlist.findOne({
      where: {
        userId,
      },
      include: [
        {
          model: WishlistItem,
          as: "wishlistItems",
          include: [
            {
              model: Product,
              as: "product",
            },
          ],
        },
      ],
    });
    return wishlist;
  }

  async removeProductFromWishlistService(userId: number, productId: number) {
    const wishlist = await Wishlist.findOne({
      where: {
        userId,
      },
    });

    if (!wishlist) {
      return;
    }

    await WishlistItem.destroy({
      where: {
        wishlistId: wishlist.dataValues.id,
        productId,
      },
    });
  }

  async clearWishlistService(userId: number) {
    const wishlist = await Wishlist.findOne({
      where: {
        userId,
      },
    });

    if (!wishlist) {
      return;
    }

    await WishlistItem.destroy({
      where: {
        wishlistId: wishlist.dataValues.id,
      },
    });
  }
}

export default new WishlistService();
