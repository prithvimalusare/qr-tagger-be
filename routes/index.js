const router = require('express').Router();
const { authorizeToken } = require('../middlewares/authorization')

router.get('/',  (req, res)=>{
    res.status(200).send('Server is working')
} )

router.use('/authorized-route', authorizeToken,(req, res)=>{
    res.status(200).send('authorized-route')
});

router.use('/auth', require('./auth'));

router.all('*', (req, res)=>{
    res.status(404).send(req.path+' not found')
})

module.exports = router;