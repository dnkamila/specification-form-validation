'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    code: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    detail: DataTypes.JSON
  }, {
    freezeTableName: true,
    timestamps: false
  });
  product.associate = function(models) {

  };
  return product;
};