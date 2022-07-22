const { Category } = require('../database/models');

const categoryAll = async () => {
    const allUser = await Category
    .findAll({ attributes: { include: ['id', 'name'] } });
      // ({attributes: ['id', 'displayName', 'email', 'image']}),
      // ({attributes: { exclude: ['password'] }}),
      // ({attributes: { include: ['id', 'displayName', 'email', 'image'] }}),
    console.log(allUser);    
    return allUser;
  };
  module.exports = {
    categoryAll,
  };