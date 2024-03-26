const midd = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const date = new Date();
  res.send(`Here's the details ${url} ${method}  ${date}`);
  next();
};

module.exports = midd;
