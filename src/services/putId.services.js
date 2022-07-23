const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  });

const putIdServece = async (title, content, id, email) => {
  const { error } = schema.validate({ title, content });
    if (error) {
      const err = new Error('Some required fields are missing');
      err.code = 'BadRequest';
      throw err;
    }
  
    const user = await User.findOne({ where: { email } });
  
    const post = await BlogPost.findAll({
      where: { [Op.and]: [{ id }, { userId: user.id }] } });
  
    if (post.length === 0) throwError('Unauthorized', 'Unauthorized user');
  
    await BlogPost.update({ title, content }, { where: { id } });
  
    const result = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', attributes: ['id', 'name'] },
      ],
    });
    return result;
  };
  module.exports = putIdServece;