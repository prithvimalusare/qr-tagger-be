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

module.exports = authControllers;