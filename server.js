const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

require("./db");

const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/booking");
const contactRoutes = require("./routes/contact");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Routes
app.use("/", authRoutes);
app.use("/", bookingRoutes);
app.use("/", contactRoutes);

app.listen(3000, () => {
    console.log("Server Running on http://localhost:3000");
});