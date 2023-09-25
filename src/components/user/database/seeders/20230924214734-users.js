"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "user1",
        email: "user1@example.com",
        password: bcrypt.hashSync("123456", 10),
        role: "user",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "admin",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        role: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
