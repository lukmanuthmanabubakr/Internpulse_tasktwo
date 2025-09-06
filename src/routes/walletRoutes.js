const express = require("express");
const {
  generateAddress,
  listAddresses,
  getWallet,
} = require("../controllers/walletController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/generate", protect, generateAddress);
router.get("/list", protect, listAddresses);
router.get("/", protect, getWallet);

module.exports = router;
