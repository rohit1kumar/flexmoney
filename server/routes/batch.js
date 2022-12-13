import { Router } from "express";
import { addUserToBatchAndPay, changeBatchTimeAndPay } from "../controllers/batch.js";
import { validateToken } from "../middlewares/auth.js";

const router = Router();
// ADD USER TO BATCH AND PAY
router.post("/join", validateToken, addUserToBatchAndPay);

// CHANGE BATCH TIME AND PAY
router.patch("/change", validateToken, changeBatchTimeAndPay);

export default router;