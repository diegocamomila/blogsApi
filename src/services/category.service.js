const { Category } = require('../database/models');

const criateCategory = async (name) => {
   if (!name) {
    const err = new Error('"name" is required');
    err.code = 'BadRequest';
    throw err;
  } 
  const [row, created] = await Category.findOrCreate({ where: { name } });
   if (created === false) {
    const err = new Error('User already registered');
    err.code = 'conflict';
    throw err;
  } 
  // console.log(row.name);
  return row;
};
module.exports = {
    criateCategory,
}; 