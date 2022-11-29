let authControllers = {};

authControllers.register = (req, res, next)=>{
    res.send('Register route reached');
}

module.exports = authControllers;