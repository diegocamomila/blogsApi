// const { Category } = require('../database/models');
// // fonte: https://www.tabnine.com/code/javascript/functions/sequelize/Op
// // fonte: https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall
// // fonte: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#creating-in-bulk 
// const criatePosteService = async (title, content, categoryIds) => {
//      if (!title || !content || !categoryIds) {
//         const err = new Error('Some required fields are missing');
//         err.code = 'BadRequest';
//         throw err;
//       }
//     };

//   for (let i = 0; i < categoryIds.length; i += 1) {
//       Category.findAll(categoryIds[i]);
//       if (check === true) {
//       const err = new Error('"categoryIds" not found');
//       err.code = 'BadRequest';
//       }
//     Category.create({ title, content, categoryIds });
//   }
  
// };
// module.exports = {
// criatePosteService,
// };