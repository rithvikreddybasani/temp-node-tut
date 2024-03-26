const getAllTasks = (req, res) => {
  res.send("all Items");
};

const createTask = (req, res) => {
  res.send("create task");
};

const getTask = (req, res) => {
  res.send("create task");
};
const updateTask = (req, res) => {
  res.send("create task");
  // res.send('Write first file into the last czse');
};
const deleteTask = (req, res) => {
  res.send("create task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
