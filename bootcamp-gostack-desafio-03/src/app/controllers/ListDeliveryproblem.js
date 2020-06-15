import Deliveryproblem from "../models/Deliveryproblem";

class ListDeliveryProblem {
    async index(req, res) {
        const delivery_id = req.params.id;

        const problemDelivery = await Deliveryproblem.findAll({
            where: { delivery_id }
        });
        return res.json(problemDelivery);
    }
}

export default new ListDeliveryProblem();
