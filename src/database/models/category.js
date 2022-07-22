'use strict';

// JSdocks para dar a sugestoes
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} dataTypes 
 * @returns 
 */

const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  return Category;
};

module.exports = Category;