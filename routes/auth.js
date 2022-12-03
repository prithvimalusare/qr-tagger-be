const router = require('express').Router()
const {authControllers} = require('../controllers');
const {registerValidaiton} = require('../helper/validationMiddleware')

router.post('/register', registerValidaiton, authControllers.register)


module.exports = router;