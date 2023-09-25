import { Request, Response, NextFunction } from "express";
import cartService from "../services/cartService";

class CartController {
  public async getCart(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await cartService.getCart(req.body.userId);
      return res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  }

  public async addToCart(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await cartService.addToCart(
        req.body.userId,
        req.body.productId
      );
      return res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  }

  public async updateCart(req: Request, res: Response, next: NextFunction) {
    try {
      await cartService.updateCart(
        req.body.userId,
        +req.params.productId,
        req.body.quantity
      );
      const cart = await cartService.getCart(req.body.userId);
      return res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  }

  public async removeItem(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await cartService.removeItem(
        req.body.userId,
        +req.params.productId
      );
      return res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  }

  public async clearCart(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await cartService.clearCart(req.body.userId);
      return res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  }
}

export default new CartController();
