'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post.categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  post.categories.init({
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post.categories',
  });
  return post.categories;
};