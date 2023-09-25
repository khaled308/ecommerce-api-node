import { Model, DataTypes } from "sequelize";
import sequelize from "../../../db";
import Product from "../../product/models/Product";
import User from "../../user/models/User";

class Review extends Model {
  public id!: number;
  public productId!: number;
  public userId!: number;
  public rating!: number;
  public comment!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: "product_id",
      references: {
        model: "Product",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: "user_id",
      references: {
        model: "User",
        key: "id",
      },
    },
    rating: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    comment: {
      type: new DataTypes.STRING(128),
      allowNull: true,
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
    tableName: "reviews",
    sequelize,
  }
);

// Review.belongsTo(Product, { foreignKey: "productId", as: "product" });
// Review.belongsTo(User, { foreignKey: "userId", as: "user" });

export default Review;
