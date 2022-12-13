import { Router } from "express";
import { getAllPayments } from "../controllers/payment.js";

const router = Router();
// ADD USER TO BATCH AND PAY
router.get("/all", getAllPayments);

export default router;