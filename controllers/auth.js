let { User } = require('../database/models')
let {createToken} = require('../helper/jwtHandler')
let { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRY } = require('../envVars')

let authControllers = {};

authControllers.register = async (req, res, next) => {
    let { email, password, full_name } = req.body;
    let createdUser;

    try {
        createdUser = await User.create({
            email: email,
            password: password,
            full_name: full_name
        })
    } catch (error) {
        next(error);
    }

    if (createdUser) res.status(201).json({
        'message': 'User created successfully',
        'User': {
            email: createdUser.email,
            full_name: createdUser.full_name
        }
    });
}

authControllers.login = async (req, res, next) => {
    let { email, password} = req.body;

    let user = await User.findOne({where: {email}});
    if(!user){
        res.status(404).json({error:`No user with email:${email} found.`})
    }else if(!user.validatePassword(password)){
        res.status(401).json({error:`Invalid password`})
    }else {
        user = {
            user_uid : user.user_uid,
            full_name : user.full_name,
            email : user.email
        }
        const access_token = createToken(user, ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRY);
        res.status(200).json({...user, access_token});
    }
}

module.exports = authControllers;