const postService = require('../services/post.service');

const post = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  try {
    const blogPost = await postService.criateBlogPost(title, content, categoryIds);
    res.status(201).json(blogPost);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  post,
};