import Notifications from '../schemas/Notifications';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const CheckisProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });
    if (!CheckisProvider) {
      return res.status(401).json({ error: 'User is not a provider.' });
    }
    const notification = await Notifications.find({ user: req.userId })
      .sort({ createdAt: -1 })
      .limit(20);
    return res.json(notification);
  }

  async update(req, res) {
    const readNotification = await Notifications.findByIdAndUpdate(
      req.params.id,
      {
        read: true,
      },
      { new: true }
    );
    return res.json(readNotification);
  }
}

export default new NotificationController();
