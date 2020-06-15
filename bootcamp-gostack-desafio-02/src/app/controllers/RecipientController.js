import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
    async index(req, res) {
        const exibeAll = await Recipient.findAll();
        return res.json(exibeAll);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            rua: Yup.string().required(),
            numero: Yup.string().required(),
            complemento: Yup.string(),
            estado: Yup.string().required(),
            cidade: Yup.string().required(),
            cep: Yup.string().required(),
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails.' });
        }

        const verificaDestinatario = await Recipient.findOne({
            where: { nome: req.body.nome, numero: req.body.numero },
        });

        if (verificaDestinatario) {
            return res.status(400).json({ error: 'User already exists.' });
        }

        const dest = await Recipient.create(req.body);
        return res.json(dest);
    }
}

export default new RecipientController();
