'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      purchase_code: {
        type: Sequelize.STRING
      },
      product_code: {
        type: Sequelize.STRING
      },
      vendor_email: {
        type: Sequelize.STRING
      },
      vendor_product_detail: {
        type: Sequelize.JSON
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('order');
  }
};