import { Model, DataTypes } from "sequelize";
import sequelize from "../../../db";
import Wishlist from "./Wishlist";
import Product from "../../product/models/Product";

class WishlistItem extends Model {
  public id!: number;
  public wishlistId!: number;
  public productId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

WishlistItem.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    wishlistId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: "wishlist_id",
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: "product_id",
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "updated_at",
    },
  },
  {
    tableName: "wishlist_items",
    sequelize,
  }
);

WishlistItem.belongsTo(Product, { foreignKey: "productId", as: "product" });

export default WishlistItem;
