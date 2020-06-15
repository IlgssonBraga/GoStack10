import Recipient from '../models/Recipient'

class RecipientByIdController{
    async index(req,res){
        const {id} = req.params
        const recipient = await Recipient.findByPk(id)
        if (!recipient){
            return res.status(401).json({error: 'Recipient not found.'})
        }
        return res.json(recipient)
    }
}

export default new RecipientByIdController()
