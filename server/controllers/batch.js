import { Batch, Payment } from '../models/index.js';
import { sequelize } from '../db/connect.js';

// ADD USER TO BATCH AND PAYMENT
export const addUserToBatchAndPay = async (req, res) => {
    try {

        const { id } = req.user;
        const { batchTiming, amount } = req.body;

        if (!batchTiming || !amount) {
            return res.status(400).json({
                status: "error",
                message: "Please enter all fields",
            });
        }

        let batch = await Batch.findOne({ where: { id: id } });
        // if user is already in a batch then don't let them join another batch
        if (batch) {
            return res.status(400).json({
                status: "error",
                message: "You are already in a batch",
            });
        }

        // IF USE HAS ALREADY PAID FOR CURRENT MONTH THEN DON'T LET THEM PAY AGAIN
        let payment = await Payment.findOne({ where: { userId: id } });

        if (payment?.createdAt.getMonth() === new Date().getMonth()) {
            return res.status(400).json({
                status: "error",
                message: "You have already paid for this month",
            });
        }

        // TRANSACTION TO CREATE PAYMENT AND ADD USER TO BATCH AT THE SAME TIME
        const t = await sequelize.transaction();
        payment = await Payment.create({
            amount: amount,
            userId: id,
        }, { transaction: t });

        batch = await Batch.create({
            timing: batchTiming,
            userId: id
        }, { transaction: t });

        await batch.save({ transaction: t });

        await t.commit();

        res.status(200).json({
            status: "success",
            message: `User added to batch`,
            batch,
            payment,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Internal Server error",
        });
    }
};

// CHANGE BATCH TIME AND PAYMENT
export const changeBatchTimeAndPay = async (req, res) => {
    try {
        const t = await sequelize.transaction();
        const { id } = req.user;
        const { batchTiming, amount } = req.body;

        if (!batchTiming || !amount) {
            return res.status(400).json({
                status: "error",
                message: "Please enter all fields",
            });
        }

        let batch = await Batch.findOne({ where: { id: id } });

        if (!batch) {
            return res.status(404).json({
                status: "error",
                message: "Batch not found",
            });
        }
        // USER CANT CHANGE IN THE SAME MONTH BUT CAN ONLY CHANGE IN THE NEXT MONTH
        if (batch.createdAt.getMonth() == new Date().getMonth()) {
            return res.status(400).json({
                status: "error",
                message: "You can only change in the next month",
            });
        }

        // IF USE IS ALREADY PAID FOR THIS MONTH THE DONT LET THEM PAY AGAIN
        let payment = await Payment.findOne({ where: { userId: id } });

        if (payment.createdAt.getMonth() == new Date().getMonth()) {
            return res.status(400).json({
                status: "error",
                message: "You have already paid for this month",
            });
        }

        // TRANSACTION STARTS HERE
        payment = await Payment.create({
            amount: amount,
            userId: id,
        }, { transaction: t });

        batch = await Batch.update({
            timing: batchTiming,
            userId: id,
            paymentId: payment.id,
        }, { where: { id: batchId } }, { transaction: t });

        await t.commit();

        res.status(200).json({
            status: "success",
            message: 'Batch time changed and payment done',
            batch,
            payment,
        });
    } catch (error) {
        await t.rollback();
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Internal Server error",
        });
    }
};

// GET MY BATCH
export const getMyBatch = async (req, res) => {
    try {
        const { id } = req.user;
        const batch = await Batch.findOne({ where: { userId: id } });

        if (!batch) {
            return res.status(404).json({
                status: "error",
                message: "Batch not found",
            });
        }

        res.status(200).json({
            status: "success",
            message: "Batch found",
            batch,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Internal Server error",
        });
    }
};