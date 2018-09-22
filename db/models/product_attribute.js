'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_attribute = sequelize.define('product_attribute', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    attribute: DataTypes.JSON
  }, {
    freezeTableName: true,
    timestamps: false
  });
  product_attribute.associate = function(models) {

  };
  return product_attribute;
};