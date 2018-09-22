'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('product_attribute', [
        {
          name: 'Tube Sheet',
          attribute: JSON.stringify({'length': ['2 m', '4 m', '8 m'], 'diameter': ['2.5 inch', '5 inch', '10 inch'], 'material': ['stainless steel', 'PVC']})
        },
        {
          name: 'Gasket',
          attribute: JSON.stringify({'type': ['A', 'B', 'C'], 'density': ['0.25 inch', '0.5 inch', '1 inch'], 'material': ['carbon', 'rubber'], 'inner diameter': ['2.5 inch', '5 inch', '10 inch']})
        },
        {
          name: 'Bolt',
          attribute: JSON.stringify({"pin": ["plus", "minus"], "length": ["1 cm", "2 cm", "3 cm"]})
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('product_attribute', null, {});
  }
};
