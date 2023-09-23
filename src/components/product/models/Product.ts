import { Model, DataTypes } from "sequelize";
import sequelize from "../../../db";

class Product extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public image!: string;
  public stock!: number;
  public price!: number;
  public categoryId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: "category_id",
      references: {
        model: Product,
        key: "id",
      },
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0,
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
    sequelize,
    tableName: "products",
  }
);

Product.belongsTo(Product, { foreignKey: "categoryId", as: "category" });

export default Product;
