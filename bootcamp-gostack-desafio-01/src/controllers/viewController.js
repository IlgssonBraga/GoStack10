const projects = require('../utils/projects')

function viewAllprojects(req, res) {
    return res.json(projects)
}


function viewOneProject(req, res){
    const {id} = req.params
    for (var i = 0; i < projects.length; i++){
        if (id == projects[i]['id']){
            return res.json(projects[i])
        }
    }
}

module.exports = {viewAllprojects, viewOneProject}

