const getAllWorkout = (req, res) => {
  res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
  res.send("get one workout");
};

const createNewWorkout = (req, res) => {
  res.send("post new workout");
};

const updateOneWorkout = (req, res) => {
  res.send("update one workout");
};

const deleteOneWorkout = (req, res) => {
  res.send("delete one workout");
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
