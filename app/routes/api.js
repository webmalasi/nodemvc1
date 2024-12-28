const express = require("express");
const router = express.Router();
const { saveTransaction } = require("../model/PaymentModel");

router.get("/getUsers", (req, res) => {
  res.json({ msg: "ok this is routing get " });
});

router.post("/addPayment", async (req, res) => {
  try {
    let result = await saveTransaction(req.body);
    console.log(result);
    res.json({
      status: "success",
      msg: "Payment Information Saved Successfully",
    });
  } catch (error) {
    res.json({ status: "failed", msg: error.message });
  }
});

module.exports = router;
