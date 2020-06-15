import Delivery from "../models/Delivery";
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature'
import Deliveryman from "../models/Deliveryman";
import Recipient from '../models/Recipient'
import File from '../models/File'

class DeliveriesDeliverymanController {
    async index(req, res) {
        const delivery = await Delivery.findAll({
            where: {
                deliveryman_id: req.params.id,
                end_date:null,
                canceled_at: null
            },include: [
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

export default new DeliveriesDeliverymanController();
