const { Category, BlogPost } = require('../database/models');
// fonte: https://www.tabnine.com/code/javascript/functions/sequelize/Op
// fonte: https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall
// fonte: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#creating-in-bulk 
const criateBlogPost = async (title, content, categoryId) => {
  if (!title || !content || !categoryId) {
    const err = new Error('Some required fields are missing');
    err.code = 'BadRequest';
    throw err;
  }
  const teste = categoryId;
  const checkCategories = await Category.findAll({ categoryId });
  const verify = checkCategories.every(categoryId === teste);
  if (verify === true) {
    const newBlogPost = await BlogPost.create({ 
      title, content, categoryId,
    });
    console.log(newBlogPost);
    return newBlogPost;
  } 
   const err = new Error('"categoryIds" not found');
   err.code = 'BadRequest';
   throw err;
};

module.exports = {
  criateBlogPost,
}; 