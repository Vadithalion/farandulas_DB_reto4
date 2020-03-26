'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cine = sequelize.define('Cine', {
    franquicia: DataTypes.STRING,
    provincia: DataTypes.STRING
  }, {});
  Cine.associate = function(models) {
    // associations can be defined here
  };
  return Cine;
};