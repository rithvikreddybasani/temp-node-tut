const authenticationMiddleware = async (req, res, next) => {
  console.log(req.headers.authorization);
};
