import { Model, DataTypes } from "sequelize";
import sequelize from "../../../db";

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: string;
  public status!: string;
  public resetPasswordToken!: string;
  public resetPasswordExpire!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    role: {
      type: new DataTypes.ENUM("admin", "user"),
      allowNull: false,
      defaultValue: "user",
    },
    status: {
      type: new DataTypes.ENUM("active", "inactive"),
      allowNull: false,
      defaultValue: "active",
    },
    resetPasswordToken: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    resetPasswordExpire: {
      type: DataTypes.DATE,
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
    tableName: "users",
    sequelize,
  }
);

export default User;
