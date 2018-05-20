const User = require('../models/user');
const crypto = require('crypto-js');

exports.signIn = (req, res) => {
    User.getUser(req.body, (user, regUser) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: err.message });
        } else {
            if (regUser.password === makeHash(user.password)) {
                res.send( { "user": { "email": user.email, "_id": user._id}, "redirect": "/cabinet" } );
            } else {
                res.send( { "error": "Неверный логин или пароль" } );
            }
        }
    });
};

exports.signUp = (req, res) => {
    let user = req.body;
    User.signUp({
        email: user.email,
        password: makeHash(user.password)
    }, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: err.message });
        } else {
            res.send( { "user": user, "redirect": "/cabinet" } );
        }
    });
};

const SECRET = 'User password';
function makeHash(plainText){
    let b64 = crypto.AES.encrypt(plainText, SECRET).toString();
    let e64 = crypto.enc.Base64.parse(b64);
    return e64.toString(crypto.enc.Hex);
}