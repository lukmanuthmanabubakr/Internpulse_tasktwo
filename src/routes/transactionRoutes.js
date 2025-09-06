const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  sendBitcoin,
  listTransactions,
} = require("../controllers/transactionController");

const router = express.Router();

// Send Bitcoin
router.post("/send-bitcoin", protect, sendBitcoin);
router.get("/", protect, listTransactions);

module.exports = router;
