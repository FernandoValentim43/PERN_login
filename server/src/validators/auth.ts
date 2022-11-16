const { check } = require('express-validator');
const db = require('../db');

//password
const password = check('password').matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).withMessage('Password has to be 8 character long,one upercase letter and one number');

//username
const username = check('username').isLength({min: 3}).withMessage('Username must have at least 3 characters')

//check is username is unique

module.exports = {
    registerValidation: [password, username]
}