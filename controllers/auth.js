let { User } = require('../database/models')

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
    }else if(!User.validatePassword(user.password, password)){
        res.status(401).json({error:`Invlaid password`})
    }else {
        res.status(200).json({user: user});
    }
}

module.exports = authControllers;