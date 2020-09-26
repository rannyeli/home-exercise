const config = require("../config.json");
const app = require("./app");

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
