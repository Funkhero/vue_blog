const db = require('../components/db');

exports.getPosts = cb => {
    db.get().collection('posts').find().toArray((err, docs) => {
        cb(err, docs);
    });
};

exports.setPost = (post, cb) => {
    db.get().collection('posts').insert(post, (err, docs) => {
        cb(err, post);
    });
};