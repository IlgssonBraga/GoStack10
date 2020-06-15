const {Router} = require('express')
const routes = Router()

routes.get('/teste', (request,response) => {
    return response.json({mensagem: 'Hello, world!'})
})

module.exports = routes