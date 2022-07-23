const { BlogPost } = require('../database/models');
const { User } = require('../database/models');
const { Category } = require('../database/models');

const postId = async (id) => {
  const post = await BlogPost.findByPk(id);
   if (post === null) {
      const err = new Error('Post does not exist');
      err.code = 'NotFound';
      throw err;
    }
  const result = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
};
module.exports = postId;