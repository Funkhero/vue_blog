const express = require('express');
const postsController = require('../controllers/posts');
const router = express.Router();

router.get('/getPosts', postsController.getPosts);
router.post('/setPost', postsController.setPost);

module.exports = router;