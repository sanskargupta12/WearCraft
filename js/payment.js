const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

router.post("/", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.slogan || "T-Shirt",
        },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    })),
    mode: "payment",
    success_url: "http://localhost:5500/public/success.html",
    cancel_url: "http://localhost:5500/public/cart.html",
  });

  res.json({ url: session.url });
});

module.exports = router;
