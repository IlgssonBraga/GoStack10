import Delivery from "../models/Delivery";
import Signature from "../models/Signature";

class EndDateDeliveryController {
    async update(req, res) {
        const date = new Date();
        const delivery = await Delivery.findOne({
            where: { id: req.params.delivery_id }
        });

        if (delivery.deliveryman_id != req.params.deliveryman_id) {
            return res
                .status(401)
                .json({ error: "You can only update yours own deliveries." });
        }

        if (delivery.start_date === null) {
            return res
                .status(401)
                .json({ error: "Delivery has not yet started." });
        }

        if (!(delivery.canceled_at === null)) {
            return res
                .status(401)
                .json({ error: "Delivery has already been canceled." });
        }

        if (!(delivery.end_date === null)) {
            res.status(401).json({
                error: "Delivery already finished."
            });
        }

        const { originalname: name, filename: path } = req.file;
        const file = await Signature.create({
            name,
            path,
        });

        const deliveryUpdate = await delivery.update({
            end_date: date,
            signature_id: file.id
        });

        return res.json(deliveryUpdate);
    }
}

export default new EndDateDeliveryController();
