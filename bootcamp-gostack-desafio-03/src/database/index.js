import Sequelize from "sequelize";
import User from "../app/models/User";
import File from "../app/models/File";
import Signature from '../app/models/Signature'
import Destinatario from "../app/models/Recipient";
import Deliveryman from "../app/models/Deliveryman";
import Delivery from "../app/models/Delivery";
import Deliveryproblem from "../app/models/Deliveryproblem";
import ConfigDB from "../config/database";

const models = [
    User,
    Destinatario,
    File,
    Signature,
    Deliveryman,
    Delivery,
    Deliveryproblem
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(ConfigDB);
        models.map(model => model.init(this.connection));
        models.map(
            model => model.associate && model.associate(this.connection.models)
        );
    }
}

export default new Database();
