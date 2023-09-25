import { Model, DataTypes } from "sequelize";
import sequelize from "../../../db";
import Product from "../../product/models/Product";

class CartItem extends Model {
  public id!: number;
  public cartId!: number;
  public productId!: number;
  public quantity!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    cartId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: "cart_id",
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: "product_id",
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
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
    tableName: "cart_items",
    sequelize,
  }
);

CartItem.belongsTo(Product, { foreignKey: "productId", as: "product" });

export default CartItem;
