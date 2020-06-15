const projects = require('../utils/projects')

function verificaID(req, res, next){
    const {id} = req.params
    for (var i = 0; i < projects.length; i++){
        if (id == projects[i]['id']){
            return next()
        }else{
            return res.status(400).json({message: 'ID not found!'})
        }
    }
}

module.exports = verificaID