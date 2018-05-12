const User = require('../models/user');

exports.signIn = (req, res) => {
    User.getUser((err, user, regUser) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: err.message });
        } else {
            if (user.password === regUser.password) {
                res.send( { "user": { "email": user.email, "_id": user._id}, "redirect": "/cabinet" } );
            } else {
                res.send( { "error": "Неверный логин или пароль" } );
            }
        }
    });
};

exports.signUp = (req, res) => {
    User.signUp((err, user) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: err.message });
        } else {
            res.send(user);
        }
    });
};