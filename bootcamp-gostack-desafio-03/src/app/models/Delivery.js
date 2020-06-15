import Sequelize, { Model } from "sequelize";
import { isBefore } from "date-fns";
import Recipient from './Recipient'
import Deliveryman from './Deliveryman'
import Signature from './Signature'

class Delivery extends Model {
    static init(sequelize) {
        super.init(
            {
                recipient_id: Sequelize.INTEGER,
                deliveryman_id: Sequelize.INTEGER,
                signature_id: Sequelize.INTEGER,
                product: Sequelize.STRING,
                canceled_at: Sequelize.DATE,
                start_date: Sequelize.DATE,
                end_date: Sequelize.DATE,
                canceled: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return isBefore(this.canceled_at, new Date());
                    }
                },

                finished: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return isBefore(this.end_date, new Date());
                    }
                },

                status: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        if((this.start_date===null && this.end_date === null) ){
                                return 'pendente'
                            }
                        if(this.start_date!==null && this.end_date === null ){
                                return 'retirada'
                            }
                        if(this.start_date!==null && this.end_date !== null){
                                return 'entregue'
                            }
                    }
                }
            },
            { sequelize }
        );
    }

    static associate(models) {
        this.belongsTo(models.Recipient, { foreignKey: 'recipient_id', as: 'recipient' });
        this.belongsTo(models.Deliveryman, { foreignKey: 'deliveryman_id', as: 'deliveryman' });
        this.belongsTo(models.Signature, { foreignKey: 'signature_id', as: 'signature' });
      }
}

export default Delivery;
