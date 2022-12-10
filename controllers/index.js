const notFoundController = function (req, res, next) {
    res.status(404).send(req.path+' not found')
}

const indexController = function (req, res, next) {
    res.status(200).send(' Server is functional ')
}

const authControllers = require('./auth');
const tagControllers = require('./tag');
const responseControllers = require('./response')

module.exports = {
    authControllers,
    tagControllers,
    responseControllers,
    notFoundController,
    indexController
}