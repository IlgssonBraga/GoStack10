import * as Yup from "yup";
import Recipient from "../models/Recipient";
import {Op} from 'sequelize'

class RecipientController {
    async index(req, res) {
        const {page = 1} = req.query
        const exibeAll = await Recipient.findAll({where:{nome: req.query.q ? {[Op.iLike]: `${req.query.q}%`}: {[Op.iLike]: '%'}},limit: 3,
        limit: 3,
        offset: (page - 1) * 3,
        order: ['created_at'],
    });
        return res.json(exibeAll);
    }

    async delete(req, res){
        const recipient = await Recipient.findOne({where: {id: req.params.id}})

        const recipientDeleted = await recipient.destroy()

        return res.json(recipientDeleted)
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            rua: Yup.string().required(),
            numero: Yup.string().required(),
            complemento: Yup.string(),
            estado: Yup.string().required(),
            cidade: Yup.string().required(),
            cep: Yup.string().required()
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails." });
        }

        const verificaDestinatario = await Recipient.findOne({
            where: { nome: req.body.nome, numero: req.body.numero }
        });

        if (verificaDestinatario) {
            return res.status(400).json({ error: "User already exists." });
        }

        const dest = await Recipient.create(req.body);
        return res.json(dest);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string(),
            rua: Yup.string(),
            numero: Yup.string(),
            complemento: Yup.string(),
            estado: Yup.string(),
            cidade: Yup.string(),
            cep: Yup.string()
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails." });
        }

        const getRecipient = await Recipient.findByPk(req.params.id)

        const recipient = await getRecipient.update(req.body)

        return res.json(recipient)

    }
}

export default new RecipientController();
