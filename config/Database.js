import {Sequelize} from "sequelize";

const db = new Sequelize('tugas4', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;