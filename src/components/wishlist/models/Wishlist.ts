import { Model, DataTypes } from "sequelize";
import sequelize from "../../../db";
import User from "../../user/models/User";
import WishlistItem from "./WishlistItem";

class Wishlist extends Model {
  public id!: number;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Wishlist.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: "user_id",
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
    tableName: "wishlists",
    sequelize,
  }
);

Wishlist.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

Wishlist.hasMany(WishlistItem, {
  foreignKey: "wishlistId",
  as: "wishlistItems",
});

export default Wishlist;
