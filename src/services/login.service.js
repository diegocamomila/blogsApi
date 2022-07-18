const Joi = require('joi');
const jwtToken = require('./newToken.service');
const { User } = require('../database/models');

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const login = async (email, password) => {
  const { error } = schema.validate({ email, password });
  
  if (error) {
    const err = new Error('Some required fields are missing');
    err.code = 'BadRequest';
    throw err;
  }
  
  const userLogin = await User.findOne({ where: { email } });
  
  if (!userLogin || userLogin.password !== password) {
    const err = new Error('Invalid fields');
    err.code = 'BadRequest';
    throw err;
  } 

  const token = jwtToken.newToken(email, userLogin.password,
     userLogin.displayName, userLogin.image);

  return token;
};

module.exports = { 
  login,
};