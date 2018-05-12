const Posts = require('../models/posts');

exports.getPosts = (req, res) => {
    Posts.getPosts((err, posts) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: err.message });
        } else {
            res.send(posts);
        }
    });
};

exports.setPost = (req, res) => {
    let post = {
      img: req.body.img,
      title: req.body.title
    };
    Posts.setPost(post, (err, posts) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: err.message });
        } else {
            res.send(post);
        }
    });
};

exports.deletePosts = (req, res) => {
    Posts.deletePosts((err, posts) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: err.message });
        } else {
            res.send(posts);
        }
    });
};