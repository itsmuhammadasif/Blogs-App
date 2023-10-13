'use strict';
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        name: 'ALi',
        email: 'ali@gmail.com',
        password: await bcrypt.hash('ali1016', 10),
        roles: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    ),

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Ahmad',
        email: 'ahmad@gmail.com',
        password: await bcrypt.hash('ahmad1016', 10),
        roles: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
