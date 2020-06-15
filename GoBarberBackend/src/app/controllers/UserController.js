import * as Yup from 'yup';
import User from '../models/User';
import File from '../models/File';

class UserController {
  async index(req, res) {
    const user = await User.findAll({ where: { provider: true } });
    return res.json(user);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
      provider: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const { email } = req.body;
    const verificaEmail = await User.findOne({ where: { email } });
    if (verificaEmail) {
      return res.status(400).json({ error: 'E-mail already exists.' });
    }
    const { id, name, password_hash, updatedAt, createdAt } = await User.create(
      req.body
    );
    return res.json({
      id,
      name,
      email,
      password_hash,
      updatedAt,
      createdAt,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      avatar_id: Yup.number(),
      email: Yup.string(),
      password: Yup.string().min(6),
      oldPassword: Yup.string()
        .min(6)
        .when('password', (password, field) => {
          return password ? field.required() : field;
        }),
      passwordConfirm: Yup.string().when('password', (password, field) => {
        return password ? field.required().oneOf([Yup.ref('password')]) : field;
      }),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }
    const { avatar_id } = req.body;

    if (avatar_id) {
      // const verificaAvatarId = await User.findOne({ where: { avatar_id } });

      /* if (verificaAvatarId) {
        return res.status(400).json({ error: 'Avatar already exists.' });
      } */

      const verificaIdOutraTabela = await File.findOne({
        where: { id: avatar_id },
      });

      if (!verificaIdOutraTabela) {
        return res.status(400).json({ error: 'Id not provided.' });
      }
    }

    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const verificaEmail = await User.findOne({ where: { email } });
      if (verificaEmail) {
        return res.status(400).json({ error: 'E-mail already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Pasword does not math!.' });
    }

    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      avatar,
    });
  }
}

export default new UserController();
