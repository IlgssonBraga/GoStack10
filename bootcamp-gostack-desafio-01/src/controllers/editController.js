const projects = require('../utils/projects')

function editProject(req, res) {
    const {id} = req.params
    const {title} = req.body
    for (var i = 0; i < projects.length; i++){
        if (id == projects[i]['id']){
            projects[i]['title'] = title
        }
    }
    return res.json(projects)
}

module.exports = editProject