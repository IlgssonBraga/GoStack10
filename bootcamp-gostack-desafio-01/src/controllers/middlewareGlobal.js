var count = 0
function middlewareGlobal(req, res, next){
    count++
    if(count <= 1){
        console.log(`${count} requisição.`)
    }else{
        console.log(`${count} requisições.`)
    }
    next()
}

module.exports = middlewareGlobal 