import Product from "../../product/models/Product";
import Cart from "../models/Cart";
import CartItem from "../models/CartItem";

class CartService {
  public async getCart(userId: number) {
    try {
      const cart = await Cart.findOne({
        where: { userId },
        include: [
          {
            model: CartItem,
            as: "cartItems",
            include: [
              {
                model: Product,
                as: "product",
              },
            ],
          },
        ],
      });

      return cart;
    } catch (err) {
      throw err;
    }
  }

  public async addToCart(userId: number, productId: number) {
    try {
      let cart = await Cart.findOne({
        where: { userId },
      });

      if (!cart) {
        cart = await Cart.create({ userId });
      }

      const cartItem = await CartItem.findOne({
        where: { cartId: cart.dataValues.id, productId },
      });

      if (cartItem) {
        cartItem.quantity += 1;
        await cartItem.save();
      } else {
        await CartItem.create({
          cartId: cart.dataValues.id,
          productId,
          quantity: 1,
        });
      }
    } catch (err) {
      throw err;
    }
  }

  public async updateCart(userId: number, productId: number, quantity: number) {
    try {
      const cart = await Cart.findOne({
        where: { userId },
      });

      if (!cart) {
        return;
      }

      CartItem.update(
        { quantity },
        {
          where: { cartId: cart.dataValues.id, productId },
        }
      );

      return await this.getCart(userId);
    } catch (err) {
      throw err;
    }
  }

  public async removeItem(userId: number, productId: number) {
    try {
      const cart = await Cart.findOne({
        where: { userId },
      });

      if (!cart) {
        return;
      }

      const cartItem = await CartItem.findOne({
        where: { cartId: cart.dataValues.id, productId },
      });

      if (!cartItem) {
        return;
      }

      await cartItem.destroy();

      return await this.getCart(userId);
    } catch (err) {
      throw err;
    }
  }

  public async clearCart(userId: number) {
    try {
      const cart = await Cart.findOne({
        where: { userId },
      });

      if (!cart) {
        return;
      }

      await CartItem.destroy({
        where: { cartId: cart.dataValues.id },
      });

      return await this.getCart(userId);
    } catch (err) {
      throw err;
    }
  }
}

export default new CartService();
