const Joi = require('joi');
const { User } = require('../database/models');
const jwtToken = require('./newToken.service');

// https://stackoverflow.com/questions/57972358/joi-email-validation
const schema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().required(),
});

const checkUser = async (displayName, email, password, image) => {
  const { error } = schema.validate({ displayName, email, password, image });

  if (error) {
    const err = new Error(error.message);
    err.code = 'BadRequest';
    throw err;
  }

  const userExist = await User.findOne({ where: { email } });

  if (userExist) {
    const err = new Error('User already registered');
    err.code = 'Conflict';
    throw err;
  }

  await User.create({ displayName, email, password, image });

  const token = jwtToken.newToken(email);

  return token;
};

const getAllUser = async () => {
  const allUser = await User
  .findAll({ attributes: { exclude: ['password'] } });
    // attributes: ['id', 'displayName', 'email', 'image'],
    // attributes: { exclude: ['password'] },
    // atributes: { include: ['id', 'displayName', 'email', 'image'] },

  return allUser;
};

module.exports = {
   checkUser,
   getAllUser,
};