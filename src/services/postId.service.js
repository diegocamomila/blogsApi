const { BlogPost, User, Category } = require('../database/models');

const postId = async (id) => {
  const post = await BlogPost.findAll({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    const err = new Error('User does not exist');
    err.code = 'NotFound';
    throw err;
  }

  return post;
};
module.exports = postId;