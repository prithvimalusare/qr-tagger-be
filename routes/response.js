const router = require('express').Router()
const { responseControllers } = require('../controllers');
const { responseCreateValidation } = require('../middlewares/validation')

router.post('/create/:tag_uid', responseCreateValidation ,responseControllers.create)


module.exports = router;