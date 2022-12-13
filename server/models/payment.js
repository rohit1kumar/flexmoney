import { DataTypes, sequelize } from '../db/connect.js';

const Payment = sequelize.define('payment', {
   id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Payment;
