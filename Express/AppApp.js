const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// Below is the middleware function the last statement(next) should be included must it is there in logger.js

// app.use(logger);
// If we want to specify the path or start with a particualr path we can do like this
// app.use('/api',logger);

// For multiple middleware function we should use array
app.use([logger, authorize]);
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
