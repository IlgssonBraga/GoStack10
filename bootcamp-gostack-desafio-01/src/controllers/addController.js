const projects = require('../utils/projects')

function addProject(req, res) {
    const {id ,title} = req.body
    const tasks = []
    //var {tasks} = req.body
    //tasks = tasks.split(',').map(valor => valor.trim())
    projects.push({id, title, tasks})
    return res.json(projects)
}


function addTasks(req, res) {
    const {id} = req.params
    const {title} = req.body
    for (var i = 0; i < projects.length; i++){
        if (id == projects[i]['id']){
            projects[i]['tasks'] = title.split(',').map(valor => valor.trim())
        }
    }
    return res.json(projects)
}

module.exports = {addProject,addTasks}