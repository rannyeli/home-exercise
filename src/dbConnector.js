const config = require("../config.json");
const Pool = require("pg").Pool;

const pool = new Pool(config.postgres);

pool.query(
  "CREATE TABLE IF NOT EXISTS Data (id SERIAL NOT NULL PRIMARY KEY, info text NOT NULL)"
);

const insertData = (req, res) => {
  pool.query(
    "INSERT into Data(info) VALUES ($1)",
    [JSON.stringify(req.body)],
    (err) => {
      if (err) {
        throw err;
      }
      res.status(200).send("data saved successfully!");
    }
  );
};

const getLastInserted = (req, res) => {
  pool.query(
    "SELECT * FROM Data ORDER BY id DESC LIMIT 1",
    (err, { rows: [result] }) => {
      if (err) {
        throw err;
      }
      res.status(200).send(JSON.parse(result.info));
    }
  );
};

module.exports = {
  insertData,
  getLastInserted,
};
