const notFoundController = function (req, res, next) {
    res.status(404).send(req.path+' not found')
}

const indexController = function (req, res, next) {
    console.log(req.user)
    res.status(200).send(' Server is functional ')
}

const authControllers = require('./auth')
const tagControllers = require('./tag')

module.exports = {
    authControllers,
    tagControllers,
    notFoundController,
    indexController
}