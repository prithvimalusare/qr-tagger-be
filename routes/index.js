const router = require('express').Router();
const { authorizeToken } = require('../middlewares/authorization')
const {notFoundController, indexController} = require('../controllers');
const authRoutes = require('./auth');
const tagRoutes = require('./tag');
const responseRoutes = require('./response');

router.get('/', indexController)

router.use('/authorized-route', authorizeToken, indexController);

router.use('/auth', authRoutes);

router.use('/tag', tagRoutes);

router.use('/response', responseRoutes);

router.all('*', notFoundController)

module.exports = router;