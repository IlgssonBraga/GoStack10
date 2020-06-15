import Mail from "../../lib/Mail";

class AddnewDeliveryMail {
    get key() {
        return "AddnewDeliveryMail";
    }

    async handle({ data }) {
        const { deliverymanInfo, product } = data;
        await Mail.sendMail({
            to: `${deliverymanInfo.name} <${deliverymanInfo.email}>`,
            subject: "Novo cadastro realizado",
            template: "cadastronovadelivery",
            context: {
                deliveryman: deliverymanInfo.name,
                name_produto: product
            }
        });
    }
}

export default new AddnewDeliveryMail();
