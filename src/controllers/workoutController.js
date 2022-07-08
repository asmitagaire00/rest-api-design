const workoutService = require("../services/workoutService");

const getAllWorkout = (req, res) => {
  const allWorkouts = workoutService.getAllWorkout();
  res.send({ status: "ok", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const oneWorkout = workoutService.getOneWorkout();
  res.send("get one workout");
};

const createNewWorkout = (req, res) => {
  const newWorkout = workoutService.createNewWorkout();
  res.send("post new workout");
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout();
  res.send("update one workout");
};

const deleteOneWorkout = (req, res) => {
  const allWorkout = workoutService.deleteOneWorkout();

  res.send("delete one workout");
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
