import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { sequelize } from './db/connect.js';
import userRoutes from './routes/user.js';
import batchRoutes from './routes/batch.js';
import paymentRoutes from './routes/payment.js';
import notFound from './middlewares/error.js';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/batch', batchRoutes);
app.use('/api/v1/payment', paymentRoutes);
app.use(notFound);

const port = process.env.PORT || 4000;

const startServer = async () => {
    try {
        await sequelize.sync();
        await sequelize.authenticate();
        console.log('Database connected successfully');
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

startServer();