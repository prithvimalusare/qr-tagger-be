const router = require('express').Router()
const {authControllers} = require('../controllers')

router.post('/register', authControllers.register)


module.exports = router;