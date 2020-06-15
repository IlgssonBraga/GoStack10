import Sequelize from 'sequelize';
import User from '../app/models/User';
import Destinatario from '../app/models/Recipient';
import ConfigDB from '../config/database';

const models = [User, Destinatario];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(ConfigDB);
        models.map(model => model.init(this.connection));
    }
}

export default new Database();
