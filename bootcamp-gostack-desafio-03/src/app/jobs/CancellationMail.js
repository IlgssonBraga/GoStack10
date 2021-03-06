import pt from "date-fns/locale/pt";
import { format } from "date-fns";
import Mail from "../../lib/Mail";

class CancellationMail {
    get key() {
        return "CancellationMail";
    }

    async handle({ data }) {
        const { deliverymanInfo } = data;
        await Mail.sendMail({
            to: `${deliverymanInfo.name} <${deliverymanInfo.email}>`,
            subject: "Novo cancelamento",
            template: "cancellation",
            context: {
                deliveryman: deliverymanInfo.name,
                canceled_at: format(new Date(), "dd 'de' MMMM', às' H:mm'h'", {
                    locale: pt
                })
            }
        });
    }
}

export default new CancellationMail();
