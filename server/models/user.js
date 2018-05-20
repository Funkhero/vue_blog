const db = require('../components/db');

exports.signUp = (user, cb) => {
    db.get().collection('users').insert(user, (err, docs) => {
        cb(err, user);
    });
};

exports.getUser = (user, cb) => {
    db.get().collection('users').findOne({ email: user.email }, (err, regUser) => {
        if (regUser) {
            cb(err, user, regUser);
        } else {
            cb(err);
        }
    });
};
