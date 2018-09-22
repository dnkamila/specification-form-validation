'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    detail: DataTypes.JSON
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};