const projects = require('../utils/projects')

function removeProject(req, res) {
    const {id} = req.params
    for (var i = 0; i < projects.length; i++){
        if (id == projects[i]['id']){
            projects.splice(i,1)
        }
    }
    return res.json(projects)
}

module.exports = removeProject