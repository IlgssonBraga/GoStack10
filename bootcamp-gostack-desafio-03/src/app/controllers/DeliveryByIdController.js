import Delivery from '../models/Delivery'

class DeliveryByIdController{
    async index(req,res){
        const {id} = req.params
        const delivery = await Delivery.findByPk(id)
        if (!delivery){
            return res.status(401).json({error: 'Delivery not found.'})
        }
        return res.json(delivery)
    }
}

export default new DeliveryByIdController()
