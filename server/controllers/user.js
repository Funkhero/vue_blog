const User = require('../models/user');
const crypto = require('crypto-js');

exports.signIn = (req, res) => {
  User.getUser(req.body, (err, user, regUser) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: err.message });
    } else {
      if (user.password === makePlainText(regUser.password)) {
      res.send( { "user": { "email": user.email, "_id": user._id}, "redirect": "/cabinet" } );
    } else {
      res.send( { "error": "Неверный логин или пароль" } );
    }
  }
  });
};

exports.signUp = (req, res) => {
  let newUser = req.body;
  User.getUser(req.body, (err, user, regUser) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: err.message });
    } else if (regUser) {
      res.send( { "error": "Пользователь с таким email уже существует" } );
    } else {
      User.signUp({
        email: newUser.email,
        password: makeHash(newUser.password)
      }, (err, user) => {
        if (err) {
          console.log(err);
          return res.status(500).send({ error: err.message });
        } else {
          res.send( { "user": { "email": user.email }, "redirect": "/cabinet" } );
        }
      });
    }
  });
};

const SECRET = 'User password';

function makeHash(plainText){
  let b64 = crypto.AES.encrypt(plainText, SECRET).toString();
  let e64 = crypto.enc.Base64.parse(b64);
  return e64.toString(crypto.enc.Hex);
}

function makePlainText(cipherText){
  let reb64 = crypto.enc.Hex.parse(cipherText);
  let bytes = reb64.toString(crypto.enc.Base64);
  let decrypt = crypto.AES.decrypt(bytes, SECRET);
  return decrypt.toString(crypto.enc.Utf8);
}