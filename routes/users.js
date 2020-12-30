const router = require('express').Router();
let bodyParser = require('body-parser')
let User = require('../models/users.model');
const path = require('path')
const fs = require('fs')


router.route('/').get((req, res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Eror' + err))
});

module.exports = router;
