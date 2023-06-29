import {Sequelize} from "sequelize";

const db = new Sequelize('percetakan', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;