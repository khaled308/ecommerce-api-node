"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(128),
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(128),
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM("admin", "user"),
        defaultValue: "user",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
