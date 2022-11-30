const { ValidationError } = require('sequelize');
const validator  = require('validator');

const error_messages = {
    'empty': ' is empty',
    'invalid': ' is invalid',
    'password': ' must contain a number alphabet and special character',
    'pass_min_len': ' must be atleast 5 characters long',
    'pass_max_len': ' must be atleast 15 characters long',
    'fn_max_len': ' must be atleast 200 characters long',
}

function sendError (req, res, next, field, error_type) {
    res.status(400).json({'message': field + error_messages[error_type] })
} 

registerValidaiton = (req, res, next)=>{

    if (validator.isEmpty(req.body.email)){
        sendError(req, res, next, 'email', 'empty')
    }else if (validator.isEmpty(req.body.password)) {
        sendError(req, res, next, 'password', 'empty')
    }else if (validator.isEmpty(req.body.full_name)) {
        sendError(req, res, next, 'full_name', 'emtpy')
    }else if (!validator.isEmail(req.body.email)) {
        sendError(req, res, next, 'email', 'invalid')
    }else if (!validator.isLength(req.body.password ,{min:8})){
        sendError(req, res, next, 'password', 'pass_min_len')
    }else if (!validator.isLength(req.body.password ,{max:15})){
        sendError(req, res, next, 'password', 'pass_max_len')
    }else if (!validator.isLength(req.body.full_name ,{max:200})){
        sendError(req, res, next, 'full_name', 'fn_max_len')
    }
    else{
        next();
    }
    
} 

module.exports = {registerValidaiton};