import User from './user.js';
import Payment from './payment.js';
import Batch from './batch.js';

User.hasOne(Batch);
Batch.belongsTo(User);

User.hasMany(Payment);
Payment.belongsTo(User);

export { User, Payment, Batch };