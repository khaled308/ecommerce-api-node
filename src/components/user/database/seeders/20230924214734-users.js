"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "user1",
        email: "user1@example.com",
        password: "123456",
        role: "user",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "admin",
        email: "admin@example.com",
        password: "123456",
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
