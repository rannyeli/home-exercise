const express = require("express");
const bodyParser = require("body-parser");
const db = require("./dbConnector");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Home Exercise");
});

app.post("/api/resource", db.insertData);

app.get("/api/resource", db.getLastInserted);

module.exports = app;
