const { User } = require('../database/models');

const getAllUser = async () => {
    const allUser = await User
    .findAll({ atributes: { include: ['id', 'displayName', 'email', 'image'] } });
      // attributes: ['id', 'displayName', 'email', 'image'],
      // attributes: { exclude: ['password'] },
      // atributes: { include: ['id', 'displayName', 'email', 'image'] },
    
    return allUser;
  };
  module.exports = {
    getAllUser,
  };