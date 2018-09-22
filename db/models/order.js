'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    purchase_code: DataTypes.STRING,
    product_code: DataTypes.STRING,
    vendor_email: DataTypes.STRING,
    vendor_product_detail: DataTypes.JSON
  }, {
    freezeTableName: true,
    timestamps: false
  });
  order.associate = function(models) {

  };
  return order;
};