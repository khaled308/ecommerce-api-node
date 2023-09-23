"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30),
        unique: true,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(),
      },
      stock: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      category_id: {
        allowNull: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "categories",
          key: "id",
        },
        onUpdate: "SET NULL",
        onDelete: "SET NULL",
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      createAt: {
        allowNull: false,
        field: "created_at",
        type: Sequelize.DATE,
      },
      updateAt: {
        allowNull: false,
        field: "updated_at",
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
