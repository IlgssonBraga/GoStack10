import * as Yup from "yup";
import Deliveryproblem from "../models/Deliveryproblem";
import Delivery from "../models/Delivery";

class DeliveryproblemController {
    async store(req, res) {
        const schema = Yup.object().shape({
            description: Yup.string().required()
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails." });
        }

        const delivery_id = req.params.delivery_id
        const {description} = req.body
        const problem = await Deliveryproblem.create({
            delivery_id,
            description
        });
        return res.json(problem);
    }

    async index(req, res) {
        const {page=1} = req.query
        const problemDelivery = await Deliveryproblem.findAll({
            limit: 3,
            offset: (page - 1) * 3,
            order: ['created_at'],
            include: {
                model: Delivery,
                attributes: [
                    "id",
                    "recipient_id",
                    "deliveryman_id",
                    "signature_id",
                    "product"
                ],
                as: "delivery"
            }
        });
        return res.json(problemDelivery);
    }

    async delete(req, res){
        const problem = await Deliveryproblem.findByPk(req.params.id)
        await problem.destroy()
        return res.json()
    }
}

export default new DeliveryproblemController();
