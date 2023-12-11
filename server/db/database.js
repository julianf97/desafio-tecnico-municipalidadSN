import { Sequelize } from 'sequelize';

export const db = new Sequelize('users_challenge', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

export const userModel = db.define('users', {
    "id_user": {
        type: Sequelize.INTEGER, 
        primaryKey: true,  
        autoIncrement: true, 
        allowNull: false 
    },
    "name": Sequelize.STRING,
    "lastName": Sequelize.STRING,
    "email": Sequelize.STRING,
    "password": Sequelize.STRING,
    "admin": Sequelize.STRING,
},{
    timestamps: false
});
