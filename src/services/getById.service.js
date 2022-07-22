const { User } = require('../database/models');

// https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
const getById = async (id) => {
  const result = await User.findByPk(id, { 
  attributes: { exclude: ['password'] } });

  if (!result) {
    const err = new Error('User does not exist');
    err.code = 'NotFound';
    throw err;
  }

  return result;
};
module.exports = {
  getById,
};