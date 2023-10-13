'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Asif',
        email: 'asif@gmail.com',
        password: await bcrypt.hash('Asif1016', 10),
        roles: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
