import Deliveryman from '../models/Deliveryman'
import File from '../models/File'

class DeliverymanByIdController{
    async index(req,res){
        const {id} = req.params
        const deliveryman = await Deliveryman.findByPk(id, {include:[{
            model:File,
            as: 'avatar'
        }]})
        if (!deliveryman){
            return res.status(401).json({error: 'Deliveryman not found.'})
        }
        return res.json({deliveryman})
    }
}

export default new DeliverymanByIdController()
