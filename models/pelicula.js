'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pelicula = sequelize.define('Pelicula', {
    titulo: DataTypes.STRING
  }, {});
  Pelicula.associate = function(models) {
    // associations can be defined here
  };
  return Pelicula;
};