const CustomApi = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomApi("please provide email and password,", 400);
  }
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new CustomApi("provide correct creditential");
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
  } catch (error) {
    throw new CustomApi("NOt authorized", 401);
  }

  const lucky = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ,John Doe`,
    secret: `Here is you autorized data  your lucky number is ${lucky}`,
  });
};

module.exports = { login, dashboard };
