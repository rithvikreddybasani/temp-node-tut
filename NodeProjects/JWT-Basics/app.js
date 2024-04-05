require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const mainRouter = require("./routes/route");

const notFoundMiddleware = require("./middlewares/not-found");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1", mainRouter);
app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(port, console.log("server is listening to port"));
  } catch (error) {
    console.log(error);
  }
};

start();
