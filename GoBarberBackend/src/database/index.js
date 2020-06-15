import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import ConfigDB from '../config/database';
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(ConfigDB);
    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/gobarber',
      {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  }
}

export default new Database();
