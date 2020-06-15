import Delivery from "../models/Delivery";
import Deliveryman from "../models/Deliveryman";
import Queue from "../../lib/Queue";
import CancellationMail from "../jobs/CancellationMail";

class CancelDateDeliveryController {
    async update(req, res) {
        const date = new Date();
        const delivery = await Delivery.findOne({
            where: { id: req.params.delivery_id }
        });

        const deliverymanInfo = await Deliveryman.findOne({
            where: { id: req.params.deliveryman_id }
        });

        if (delivery.deliveryman_id != req.params.deliveryman_id) {
            return res
                .status(401)
                .json({ error: "You can only update yours own deliveries." });
        }

        if (delivery.start_date === null) {
            return res.status(401).json({ error: "Delivery not started." });
        }

        if (!(delivery.end_date === null)) {
            return res
                .status(401)
                .json({ error: "Delivery has already been completed." });
        }

        if (!(delivery.canceled_at === null)) {
            return res
                .status(401)
                .json({ error: "Delivery already canceled." });
        }

        const deliveryUpdate = await delivery.update({
            canceled_at: date
        });

        Queue.add(CancellationMail.key, { deliverymanInfo });

        return res.json(deliveryUpdate);
    }
}

export default new CancelDateDeliveryController();
