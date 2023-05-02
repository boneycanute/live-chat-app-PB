const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Api is running3");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log("Server Started"));
