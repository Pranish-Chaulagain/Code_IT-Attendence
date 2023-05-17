const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const env = require("dotenv").config(); // Import Section

//Init Section
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => res.send("Main Page"));

module.exports = app;
