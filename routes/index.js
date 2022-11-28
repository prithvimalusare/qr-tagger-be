const router = require('express').Router();

router.use('/auth', require('./auth'));

router.all('*', (req,res,next)=>{
    res.status(404).send(req.path+' not found')
})

module.exports = router;