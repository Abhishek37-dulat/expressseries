const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./routes/admin.js");
const shop = require("./routes/shop.js");

const app = express();
const port = 8001;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", admin);
app.use("/", shop);

app.use("/", (req, res) => {
  res.status(404).send("404 ERROR");
});

app.listen(port, () => {
  console.log("listening to server: ", port);
});
