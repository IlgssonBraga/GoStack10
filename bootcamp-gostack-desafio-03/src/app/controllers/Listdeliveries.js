import Delivery from "../models/Delivery";
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature'
import Deliveryman from "../models/Deliveryman";
import Recipient from '../models/Recipient'
import File from '../models/File'

class ListDeliveriesController {

async index(req, res) {
        const delivery = await Delivery.findAll({where:{deliveryman_id : req.userId},
        include: [
            {
                model: Recipient,
                as:'recipient',
            },
            {
                model: Deliveryman,
                as:'deliveryman',
                include: [{
                    model: File,
                    as: 'avatar'
                }]
            },
            {
                model: Signature,
                as:'signature',
            }
        ]

        });

        return res.json(delivery);
    }

}

export default new ListDeliveriesController();
