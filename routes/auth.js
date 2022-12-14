const router = require('express').Router()
const {authControllers} = require('../controllers');
const {registerValidaiton} = require('../middlewares/validation')

router.post('/register', registerValidaiton, authControllers.register)

router.post('/login', loginValidaiton,  authControllers.login)



module.exports = router;