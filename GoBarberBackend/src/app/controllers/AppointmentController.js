import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Appointment from '../models/Appointment';
import User from '../models/User';
import File from '../models/File';
import NotificationSchema from '../schemas/Notifications';
import Queue from '../../lib/Queue';
import CancellationMail from '../jobs/CancellationMail';

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const exibeallappointments = await Appointment.findAll({
      where: {
        user_id: req.userId,
        canceled_at: null,
      },
      order: ['date'],
      attributes: ['id', 'date', 'past', 'cancelable'],
      limit: 20,
      offset: (page - 1) * 20,
      include: {
        model: User,
        as: 'provider',
        attributes: ['id', 'name'],
        include: {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      },
    });
    return res.json(exibeallappointments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Valiation fails.' });
    }

    const { provider_id, date } = req.body;

    const VerificaProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!VerificaProvider) {
      return res.status(401).json({ error: 'User is not provider.' });
    }

    if (provider_id === req.userId) {
      return res
        .status(401)
        .json({ error: 'User cant add appointments to himself.' });
    }

    const appointmentDate = startOfHour(parseISO(date));

    if (isBefore(appointmentDate, new Date())) {
      return res.status(401).json({ error: 'Past date are not permitted.' });
    }

    const checkDate = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: appointmentDate,
      },
    });

    if (checkDate) {
      return res.status(401).json({ error: 'This date is unavailable' });
    }

    const appoint = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date: appointmentDate,
    });

    /* Notificação */

    const formatted = format(appointmentDate, "dd 'de' MMMM', às' H:mm'h'", {
      locale: pt,
    });

    const user = await User.findByPk(req.userId);

    await NotificationSchema.create({
      content: `Novo agendamento de ${user.name} para o dia ${formatted}.`,
      user: provider_id,
    });

    return res.json(appoint);
  }

  async delete(req, res) {
    const appointment = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'email'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
      ],
    });
    if (appointment.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'You can only delete yours appointments.' });
    }

    const subH = subHours(appointment.date, 2);
    if (isBefore(subH, new Date())) {
      return res.status(401).json({
        error: 'You can only cancel appointments two hours before event.',
      });
    }

    appointment.canceled_at = new Date();
    appointment.save();

    Queue.add(CancellationMail.key, { appointment });

    return res.json(appointment);
  }
}

export default new AppointmentController();
