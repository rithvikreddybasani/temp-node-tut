const express = require("express");
const midd = require("./middle");
const app = express();

app.use("/about", (req, res, next) => {
  midd(req, res, next);
});

app.get("/", (req, res) => {
  console.log("I am Home bro!");
});

app.get("/about", (req, res) => {
  console.log("I am from the vs code!");
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000");
});
