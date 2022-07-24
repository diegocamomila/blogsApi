const criatePostService = require('../services/criatePost.service');
const postAll = require('../services/postAll.service');
const postId = require('../services/postId.service');

const post = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  try {
    const blogPost = await criatePostService.create(title, content, categoryIds);
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

const getId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await postId(id);
    return res.status(200).json(result);
  } catch (err) {
    next(err); 
  }
};

// const putId = async (req, res, next) => {
//   try {
//     const { title, content } = req.body;

//     const updated = posts.find((post) => id === post.id);
//     res.status(200).json(updated);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  post,
  getAll,
  getId,
  // putId,
};