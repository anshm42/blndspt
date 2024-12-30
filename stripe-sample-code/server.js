// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51QLMuwHDuUsEP7LqiIsaU5sFdAIn4VbRhus93Wc2EuhFxPllKGEvvM9ELQxNzzTr477xrpwV0Fj5KJ5IwfBZHR6l00R7Fu4XJV"
);
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  const { quantity1, quantity2 } = req.body; // Extract quantities from the request body

  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },

    ui_mode: "embedded",
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1QLaQOHDuUsEP7LqfouNM1W4",
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 10,
        },
        quantity: quantity1,
      },
      {
        price: "price_1QbVwEHDuUsEP7Lq6R1qnWk6",
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 10,
        },
        quantity: quantity2,
      },
    ],
    mode: "payment",
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.send({ clientSecret: session.client_secret });
});

app.get("/session-status", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
});

app.listen(4242, () => console.log("Running on port 4242"));
