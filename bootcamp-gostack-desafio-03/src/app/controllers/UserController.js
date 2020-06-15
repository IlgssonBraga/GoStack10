import * as Yup from "yup";
import User from "../models/User";

class UserController {
    async index(req, res) {
        const exibeAll = await User.findAll();
        return res.json(exibeAll);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required()
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails." });
        }
        const { email } = req.body;
        const existsUser = await User.findOne({ where: { email } });
        if (existsUser) {
            return res.status(400).json({ error: "User already exists." });
        }
        const { id, nome } = await User.create(req.body);
        return res.json({
            id,
            nome,
            email
        });
    }
}

export default new UserController();
