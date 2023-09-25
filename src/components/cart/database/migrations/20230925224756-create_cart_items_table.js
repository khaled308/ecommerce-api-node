"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("cart_items", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cart_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "carts", key: "id" },
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "products", key: "id" },
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("cart_items");
  },
};
