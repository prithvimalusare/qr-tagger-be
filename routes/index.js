const router = require('express').Router();

router.get('/',  (req,res,next)=>{
    res.status(200).send('Server is working')
} )

router.use('/auth', require('./auth'));

router.all('*', (req,res,next)=>{
    res.status(404).send(req.path+' not found')
})

module.exports = router;