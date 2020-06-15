import * as Yup from "yup";
import Deliveryman from "../models/Deliveryman";
import File from '../models/File'
import {Op} from 'sequelize'

class DeliverymanController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            avatar_id: Yup.number(),
            email: Yup.string()
                .required()
                .email()
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails." });
        }
        const { email } = req.body;
        const verificaEmail = await Deliveryman.findOne({ where: { email } });
        if (verificaEmail) {
            return res.status(401).json({ error: "E-mail already exists." });
        }
        const deliveryman = await Deliveryman.create(req.body);
        return res.json(deliveryman);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            avatar_id: Yup.number(),
            email: Yup.string().email()
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails." });
        }

        const {id} = req.params
        const { email } = req.body;
        if (email) {
            const verificaEmail = await Deliveryman.findOne({
                where: { email }
            });



            if (verificaEmail && verificaEmail.id != id) {
                return res
                    .status(401)
                    .json({ error: "E-mail already exists." });
            }
        }

        const deliveryman = await Deliveryman.findOne({
            where: { id: req.params.id }
        });

        const deliverymanUpdate = await deliveryman.update(req.body);

        return res.json(deliverymanUpdate);
    }

    async index(req, res) {
        const {page = 1} = req.query
        const deliveryman = await Deliveryman.findAll({where:{name: req.query.q ? {[Op.iLike]: `${req.query.q}%`}: {[Op.iLike]: '%'}},
        limit: 3,
        offset: (page - 1) * 3,
        order: ['created_at'],
        include:[
            {
            model:File,
            as:'avatar'
        }]});

        return res.json(deliveryman);
    }

    async delete(req, res) {
        const deliveryman = await Deliveryman.findOne({
            where: { id: req.params.id }
        });

        const deliverymanDelete = await deliveryman.destroy();
        return res.json(deliverymanDelete);
    }
}

export default new DeliverymanController();
