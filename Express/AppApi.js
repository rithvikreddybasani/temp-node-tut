const express = require("express");
const app = express();
const { products } = require("../data");

app.get("/", (req, res) => {
  // res.json(products);
  res.send("<h1>Home Page</h1><a href='/api/products'>products");
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name } = product;
    return { id, name };
  });
  res.json(newProduct);
});

app.get("/api/products/:productID", (req, res) => {
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find((product) => product.id == productID);
  if (!singleProduct) {
    res.status(404).send("Provide correct domain bro");
  }
  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  res.send("Hello world");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
