'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    id: DataTypes.STRING,
    purchase_code: DataTypes.STRING,
    product_code: DataTypes.STRING,
    vendor_email: DataTypes.STRING,
    vendor_product_detail: DataTypes.JSON
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};