'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_attribute = sequelize.define('product_attribute', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    attribute: DataTypes.JSON
  }, {});
  product_attribute.associate = function(models) {
    // associations can be defined here
  };
  return product_attribute;
};