const router = require('express').Router()
const {authControllers} = require('../controllers')

router.get('/', authControllers.getAuth)


module.exports = router;