const Joi = require('joi');
const { User } = require('../database/models');

const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
});

const register = async (displayName) => {
  const { error } = schema.validate({ displayName });
  
  if (error) {
    const err = new Error('is required');
    err.code = 'BadRequest';
    throw err;
  }
  
  const registerUser = await User.findOne({ where: { displayName } });
  
  if (!registerUser) {
    const err = new Error('Invalid fields');
    err.code = 'BadRequest';
    throw err;
  } 

  return registerUser;
};
module.exports = {
    register,
};