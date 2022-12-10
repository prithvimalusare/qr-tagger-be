const { ValidationError } = require('sequelize');
const validator = require('validator');

const error_messages = {
    'und_empt': ' is undefined or empty',
    'invalid': ' is invalid',
    'password': ' must contain a number alphabet and special character',
    'pass_min_len': ' must be atleast 8 characters long',
    'pass_max_len': ' must be atmost 15 characters long',
    'gnrl_max_len': ' must be atmost 255 characters long',
}

function sendError(req, res, next, field, error_type) {
    res.status(400).json({ 'message': field + error_messages[error_type] })
}

registerValidaiton = (req, res, next) => {

    if (!req.body.email || validator.isEmpty(req.body.email)) {
        sendError(req, res, next, 'email', 'und_empt')
    } else if (!req.body.password || validator.isEmpty(req.body.password)) {
        sendError(req, res, next, 'password', 'und_empt')
    } else if (!req.body.full_name || validator.isEmpty(req.body.full_name)) {
        sendError(req, res, next, 'full_name', 'und_empt')
    } else if (!validator.isEmail(req.body.email)) {
        sendError(req, res, next, 'email', 'invalid')
    } else if (!validator.isLength(req.body.password, { min: 8 })) {
        sendError(req, res, next, 'password', 'pass_min_len')
    } else if (!validator.isLength(req.body.password, { max: 15 })) {
        sendError(req, res, next, 'password', 'pass_max_len')
    } else if (!validator.isLength(req.body.full_name, { max: 255 })) {
        sendError(req, res, next, 'full_name', 'gnrl_max_len')
    }
    else {
        next();
    }

}

loginValidaiton = (req, res, next) => {

    if (!req.body.email || validator.isEmpty(req.body.email)) {
        sendError(req, res, next, 'email', 'und_empt')
    } else if (!req.body.password || validator.isEmpty(req.body.password)) {
        sendError(req, res, next, 'password', 'und_empt')
    } else {
        next();
    }

}

tagCreateValidation = (req, res, next) => {
    if (!req.body.name || validator.isEmpty(req.body.name)) {
        sendError(req, res, next, 'name', 'und_empt')
    } else {
        next();
    }
}

tagUpdateValidation = (req, res, next) => {
    if (!req.body.name || validator.isEmpty(req.body.name)) {
        sendError(req, res, next, 'name', 'und_empt')
    } else {
        next();
    }
}

responseCreateValidation = (req, res, next) => {
    if (!req.body.email || validator.isEmpty(req.body.email)) {
        sendError(req, res, next, 'email', 'und_empt')
    } else if (!req.body.full_name || validator.isEmpty(req.body.full_name)) {
        sendError(req, res, next, 'full_name', 'und_empt')
    } else if (!req.body.phone || validator.isEmpty(req.body.phone)) {
        sendError(req, res, next, 'phone', 'und_empt')
    } else if (!req.body.message || validator.isEmpty(req.body.message)) {
        sendError(req, res, next, 'message', 'und_empt')
    } else if (!validator.isEmail(req.body.email)) {
        sendError(req, res, next, 'email', 'invalid')
    } else if (!validator.isLength(req.body.full_name, { max: 255 })) {
        sendError(req, res, next, 'full_name', 'gnrl_max_len')
    } else if (!validator.isLength(req.body.message, { max: 255 })) {
        sendError(req, res, next, 'message', 'gnrl_max_len')
    } 
    else {
        next();
    }
}

module.exports = { registerValidaiton, loginValidaiton, tagCreateValidation, tagUpdateValidation, responseCreateValidation };