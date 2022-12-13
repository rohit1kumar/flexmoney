import { Payment, User } from '../models/index.js';
const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_SIZE = 10;

// GET ALL PAYMENTS **FOR ANALYTICS USE BY ADMIN**
export const getAllPayments = async (req, res) => {
    try {
        let {
            pageNumber = DEFAULT_PAGE_NUMBER,
            pageSize = DEFAULT_PAGE_SIZE,
        } = req.query;

        pageNumber = parseInt(pageNumber);
        pageSize = parseInt(pageSize);

        if (isNaN(pageNumber) || pageNumber < 1) {
            pageNumber = DEFAULT_PAGE_NUMBER;
        }

        if (isNaN(pageSize) || pageSize < 1) {
            pageSize = DEFAULT_PAGE_SIZE;
        }

        const payments = await Payment.findAll({
            where: {
                limit: pageSize,
                offset: (pageNumber - 1) * pageSize
            }

        });
        res.status(200).json({
            status: 'success',
            message: 'Payments found',
            payments
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server error'
        });
    }
};