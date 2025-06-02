const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const paymentRoutes = require("./routes/payment");
app.use("/api/payment", paymentRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
