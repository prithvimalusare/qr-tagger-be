const router = require('express').Router()
const {tagControllers} = require('../controllers');
const {tagCreateValidation} = require('../middlewares/validation')
const {authorizeToken} = require('../middlewares/authorization')

router.post('/create',authorizeToken, tagCreateValidation ,tagControllers.create)

router.get('/get-all', authorizeToken, tagControllers.getAll)


module.exports = router;