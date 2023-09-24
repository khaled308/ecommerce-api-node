"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Product 1",
        description: "Product 1 description",
        price: 100,
        image: "https://via.placeholder.com/150",
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Product 2",
        description: "Product 2 description",
        price: 200,
        image: "https://via.placeholder.com/150",
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Product 3",
        description: "Product 3 description",
        price: 300,
        image: "https://via.placeholder.com/150",
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Product 4",
        description: "Product 4 description",
        price: 400,
        image: "https://via.placeholder.com/150",
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Product 5",
        description: "Product 5 description",
        price: 500,
        image: "https://via.placeholder.com/150",
        category_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
