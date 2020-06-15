import Deliveryproblem from "../models/Deliveryproblem";
import Delivery from "../models/Delivery";
import Deliveryman from "../models/Deliveryman";
import User from "../models/User";
import Queue from "../../lib/Queue";
import CancellationMailTransporter from "../jobs/CancellationMailTransporter";

class CancelDeliverybyTransporterController {
    async update(req, res) {
        const value = req.params.id;

        const problemDelivery = await Deliveryproblem.findOne({
            where: { id: value }
        });

        const delivery = await Delivery.findOne({
            where: { id: problemDelivery.delivery_id }
        });

        if (delivery.start_date === null) {
            res.status(401).json({
                error: "Delivery has not yet started."
            });
        }else if (!(delivery.end_date === null)) {
            res.status(401).json({
                error: "Delivery already finished."
            });
        }else if (!(delivery.canceled_at === null)) {
            res.status(401).json({
                error: "Delivery canceled."
            });
        } else{
            const deliverymanInfo = await Deliveryman.findOne({
                where: {
                    id: delivery.deliveryman_id
                }
            });

            const useradm = await User.findOne({
                where: {
                    id: req.userId
                }
            });

            const problemDeliveryDelete = await delivery.update({
                canceled_at: new Date()
            });

            Queue.add(CancellationMailTransporter.key, {
                useradm,
                deliverymanInfo
            });

            return res.json(problemDeliveryDelete);
        }

        }






}

export default new CancelDeliverybyTransporterController();
