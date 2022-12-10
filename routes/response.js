const router = require('express').Router()
const { responseControllers } = require('../controllers');
const { responseCreateValidation } = require('../middlewares/validation')
const {authorizeToken} = require('../middlewares/authorization')

router.post('/create/:tag_uid', responseCreateValidation ,responseControllers.create)

router.get('/get-all/:tag_uid', authorizeToken ,responseControllers.getAll)


module.exports = router;