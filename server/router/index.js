const express = require('express');
const postsController = require('../controllers/posts');
const userController = require('../controllers/user');
const router = express.Router();

//User API
router.post('/signIn', userController.signIn);
router.post('/signUp', userController.signUp);

//Posts API
router.get('/getPosts', postsController.getPosts);
router.post('/setPost', postsController.setPost);
router.post('/deletePost', postsController.deletePosts);

module.exports = router;