'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product', [
      {
        code: 'A1059JKL',
        name: 'Tube Sheet',
        detail: JSON.stringify({"length": "2 m", "diameter": "5 inch", "material": "stainless steel"})
      },
      {
        code: 'B1000GKL',
        name: 'Gasket',
        detail: JSON.stringify({"type": "C", "density": "1 inch", "material": "carbon", "inner diameter": "2.5 inch"})
      },
      {
        code: 'C1402KDN',
        name: 'Bolt',
        detail: JSON.stringify({"pin": "minus", "length": "2 cm"})
      }
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product', null, {});
  }
};
