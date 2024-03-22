const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Save</button>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});
app.listen(port, () => {
  console.log("listening to server: ", port);
});
