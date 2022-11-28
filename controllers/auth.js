let authControllers = {};

authControllers.getAuth = (req, res, next)=>{
    res.send('reached route');
}

module.exports = authControllers;