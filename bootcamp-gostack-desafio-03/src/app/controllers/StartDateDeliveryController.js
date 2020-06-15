import { getHours } from "date-fns";
import { Op } from "sequelize";
import Delivery from "../models/Delivery";

class StartDateDeliveryController {
    async update(req, res) {
        const date = new Date();
        const delivery = await Delivery.findOne({
            where: { id: req.params.delivery_id }
        });

        if (delivery.deliveryman_id != req.params.deliveryman_id) {
            return res
                .status(401)
                .json({ error: "You can only update your own deliveries" });
        }

        const { count } = await Delivery.findAndCountAll({
            where: {
                start_date: {
                    [Op.ne]: null
                },
                canceled_at: {
                    [Op.eq]: null
                },
                end_date: {
                    [Op.eq]: null
                }
            }
        });

        if (getHours(date) <= 7 || getHours(date) >= 17) {
            return res.status(401).json({
                error: "Currently unavailable. Try between 8:00h and 18:00h."
            });
        }

        if (!(delivery.start_date === null)) {
            return res.status(401).json({
                error: "Delivery already started."
            });
        }

        if (!(delivery.end_date === null)) {
            return res.status(401).json({
                error: "Delivery already finished."
            });
        }

        if (!(delivery.canceled_at === null)) {
            return res.status(401).json({
                error: "Delivery canceled."
            });
        }

        if (count > 5) {
            return res
                .status(401)
                .json({ error: "Daily withdrawal limit exceeded." });
        }

        const deliveryUpdate = await delivery.update({
            start_date: date
        });

        return res.json(deliveryUpdate);
    }
}

export default new StartDateDeliveryController();
