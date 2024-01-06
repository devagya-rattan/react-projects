const router = require("express").Router();
const stripe = require("stripe")('sk_test_51NSixySI3j3qXOu7B4XZeNGy0qs8egiXHLocSyu9A90RiiXYY6hkf2XpV7uk3H0XFl0847ZkjHpfKiC8651qlgad00kpdfOSL0');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;