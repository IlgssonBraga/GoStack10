import jwt from "jsonwebtoken";
import * as Yup from "yup";
import Deliveryman from "../models/Deliveryman";
import authConfig from "../../config/auth";
import File from '../models/File';

class SessionDeliverymanController {
    async store(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required()
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails." });
        }
        const { id } = req.body;
        const delivery = await Deliveryman.findOne({ where: { id }, include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        });
        if (!delivery) {
            return res.status(404).json({ error: "User not found." });
        }

        const { name, email, createdAt, avatar } = delivery;

        return res.json({
            user:{
                id,
                name,
                email,
                createdAt,
                avatar,
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        });
    }
}

export default new SessionDeliverymanController();
