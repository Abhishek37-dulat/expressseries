const express = require("express");

const app = express();
const port = 8000;

app.use((req, res, next) => {
  console.log("Server 1");
});

app.use((req, res, next) => {
  console.log("Server 2");
});

app.listen(port, () => {
  console.log("listening to server: ", port);
});
