import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const provider = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email'],
      include: {
        model: File,
        attributes: ['name', 'path', 'url'],
        as: 'avatar',
      },
    });
    return res.json(provider);
  }
}

export default new ProviderController();
