import { Op } from "sequelize";
import Delivery from "../models/Delivery";
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature'
import Deliveryman from "../models/Deliveryman";
import Recipient from '../models/Recipient'
import File from '../models/File'

class DeliveriesCompletedController {
    async index(req, res) {
        const delivery = await Delivery.findAll({
            where: {
                deliveryman_id: req.params.id,
                canceled_at: {
                    [Op.eq]: null
                },
                end_date: {
                    [Op.ne]: null
                }
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

export default new DeliveriesCompletedController();
