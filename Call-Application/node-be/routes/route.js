const Router = require('express').Router();
const Controllers = require('./../controllers/controller')

Router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../../react-bp/build/index.html"))
});

Router.post('/connectCall', Controllers.userCreate, Controllers.logCreate);

module.exports = Router;