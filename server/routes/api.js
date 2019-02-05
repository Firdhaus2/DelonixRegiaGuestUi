const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
// const bcrypt = require('bcryptjs');
// const BCRYPT_SALT_ROUNDS = 12;

// declare axios for making http requests
const axios = require('axios');

var db;
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect('mongodb://admin:password1@ds119445.mlab.com:19445/swendelonixregia', { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('swendelonixregia');

});

module.exports = router;