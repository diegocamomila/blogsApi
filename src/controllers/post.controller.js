const postService = require('../services/post.service');
const postAll = require('../services/postAll.service');

const post = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  try {
    const blogPost = await postService.criateBlogPost(title, content, categoryIds);
    res.status(201).json(blogPost);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const posts = await postAll();
    return res.status(200).json(posts);
  } catch (err) {
    next(err); 
  }
};
module.exports = {
  post,
  getAll,
};