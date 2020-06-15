import * as Yup from "yup";
import Delivery from "../models/Delivery";
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature'
import Queue from "../../lib/Queue";
import Deliveryman from "../models/Deliveryman";
import Recipient from '../models/Recipient'
import AddnewDeliveryMail from "../jobs/AddnewDeliveryMail";
import File from '../models/File'
import { Op } from "sequelize";

class DeliveryController {
    async store(req, res) {
        const schema = Yup.object().shape({
            recipient_id: Yup.number().required(),
            deliveryman_id: Yup.number().required(),
            product: Yup.string().required()
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails." });
        }
        const {
            id,
            recipient_id,
            deliveryman_id,
            signature_id,
            product
        } = await Delivery.create(req.body);

        const deliverymanInfo = await Deliveryman.findOne({
            where: { id: deliveryman_id }
        });

        Queue.add(AddnewDeliveryMail.key, { deliverymanInfo, product });

        return res.json({
            id,
            recipient_id,
            deliveryman_id,
            signature_id,
            product
        });
    }



    async index(req, res) {
        const {page = 1} = req.query
        const delivery = await Delivery.findAll({where:{product : req.query.q ? {[Op.iLike] : `${req.query.q}%`} : {[Op.iLike] : '%'}},
        limit: 3,
        offset: (page - 1) * 3,
        order: ['created_at'],
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

    async update(req, res) {
        const schema = Yup.object().shape({
            recipient_id: Yup.number(),
            deliveryman_id: Yup.number(),
            product: Yup.string()
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails." });
        }

        const delivery = await Delivery.findOne({
            where: { id: req.params.id }
        });

        const deliveryUpdate = await delivery.update(req.body);

        return res.json(deliveryUpdate);
    }

    async delete(req, res) {
        const delivery = await Delivery.findOne({
            where: { id: req.params.id }
        });

        const deliveryUpdate = await delivery.destroy();

        return res.json(deliveryUpdate);
    }
}

export default new DeliveryController();
