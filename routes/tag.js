const router = require('express').Router()
const {tagControllers} = require('../controllers');
const {tagCreateValidation, tagUpdateValidation} = require('../middlewares/validation')
const {authorizeToken} = require('../middlewares/authorization')

router.post('/create',authorizeToken, tagCreateValidation ,tagControllers.create)

router.put('/update/:tag_uid', authorizeToken, tagUpdateValidation ,tagControllers.update)

router.delete('/delete/:tag_uid', authorizeToken, tagControllers.delete)

router.get('/get/:tag_uid', authorizeToken, tagControllers.getOne)

router.get('/get-all', authorizeToken, tagControllers.getAll)


module.exports = router;