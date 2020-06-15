import Sequelize, { Model } from "sequelize";

class Deliveryproblem extends Model {
    static init(sequelize) {
        super.init(
            {
                delivery_id: Sequelize.INTEGER,
                description: Sequelize.STRING
            },
            { sequelize }
        );
    }

    static associate(models) {
        this.belongsTo(models.Delivery, {
            foreignKey: "delivery_id",
            as: "delivery"
        });
    }
}

export default Deliveryproblem;
