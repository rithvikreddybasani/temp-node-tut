const express = require("express");
const app = new express();
let { people } = require("../data");

app.use(express.static("./inform"));

app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  // req.body->gives a json with the name of input and the given input
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(404).send("Please Provide Correct Credistential");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
