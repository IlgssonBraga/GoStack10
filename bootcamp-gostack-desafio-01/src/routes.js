const {Router} = require('express')
const {viewAllprojects, viewOneProject} = require('./controllers/viewController')
const {addProject,addTasks} = require('./controllers/addController')
const editProject = require('./controllers/editController')
const removeProject = require('./controllers/removeController')
const verificaID = require('./controllers/midlewareVerificaId')
const middlewareGlobal = require('./controllers/middlewareGlobal')
const routes = Router()

routes.use(middlewareGlobal)

routes.get('/projects', viewAllprojects)

routes.get('/projects/:id', verificaID, viewOneProject)

routes.post('/projects',addProject )

routes.post('/projects/:id/tasks', verificaID, addTasks)

routes.put('/projects/:id', verificaID, editProject)

routes.delete('/projects/:id', verificaID,removeProject)

module.exports = routes