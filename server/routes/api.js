const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;

// declare axios for making http requests
const axios = require('axios');

var db;
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect('mongodb://admin:password1@ds119445.mlab.com:19445/swendelonixregia', { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('swendelonixregia');

});

router.get('/registerAcc/:username/:password/:email', (req, res) => {
    bcrypt.hash(req.params.password, BCRYPT_SALT_ROUNDS, function (err, hash) {
        db.collection('guest_account').insertOne({
            "username": req.params.username, "password": hash, "email": req.params.email
        }, (err, result) => {
        });
    });
})
// Login Account
router.get('/loginAcc/:username/:password', (req, res2) => {
    var username = req.params.username;
    var password = req.params.password;
    db.collection('guest_account').findOne({ "username": username }, {
        username: 1, password: 1, email: 1, _id: 0
    }, function (err, result) {
        bcrypt.compare(password, result.password, function (err, res) {
            if (res) {
                res2.send([{ "auth": true }]);
            } else {
                res2.send([{ "auth": false }]);
            }
        });
    });
});
//Retrieve User Information by Email
router.get('/retrieveAccInfo/:username', function (req, res) {
    db.collection('guest_account').find({ "username": req.params.username }).toArray((err, results) => { res.send(results) });
});

module.exports = router;