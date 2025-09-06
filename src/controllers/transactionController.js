const bitnobAPI = require("../config/bitnob");

exports.sendBitcoin = async (req, res, next) => {
  try {
    const { satoshis, address, description, priorityLevel } = req.body;

    // Use logged-in user's email
    const customerEmail = req.user.email;

    if (!satoshis || !address) {
      return res.status(400).json({
        success: false,
        message: "satoshis and address are required",
      });
    }

    //  Send BTC request to Bitnob API
    const response = await bitnobAPI.post("/wallets/send_bitcoin", {
      satoshis,
      address,
      customerEmail,
      description: description || "BTC transfer",
      priorityLevel: priorityLevel || "regular",
    });

    const txData = response?.data?.data;

    if (!txData) {
      return res.status(400).json({
        success: false,
        message: "Failed to send Bitcoin",
        raw: response.data,
      });
    }

    res.status(200).json({
      success: true,
      message: "Transaction successfully submitted",
      transaction: txData,
    });
  } catch (err) {
    next(err);
  }
};

exports.listTransactions = async (req, res, next) => {
  try {
    const response = await bitnobAPI.get(
      "/transactions/?order=ASC&page=1&take=10"
    );

    const transactions = response?.data?.data.transactions;
    const currentUserTransactions = [];
    //filter to show transactions of logged in user
    console.log(req.user.bitnobCustomerId);
    console.log(transactions);
    transactions.forEach((el) => {
      if (el.customerId === req.user.bitnobCustomerId) {
        currentUserTransactions.push({
          id: el.id,
          customerId: el.customerId,
          transactionDate: el.createdAt,
          type: el.type,
          description: el.description,
          reference: el.reference,
          amountUSD: el.amount,
          amountBTC: el.btcAmount,
          fee: el.fees,
          address: el.address,
        });
      }
    });

    res.status(200).json({
      status: "success",
      length: currentUserTransactions.length,
      data: currentUserTransactions,
    });
  } catch (error) {
    next(err);
  }
};
