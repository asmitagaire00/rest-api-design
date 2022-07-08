const Workouts = require("../database/Workout");

const getAllWorkout = () => {
  const allWorkouts = Workouts.getAllWorkout();
  return allWorkouts;
};
const getOneWorkout = () => {
  return;
};
const createNewWorkout = () => {
  return;
};
const updateOneWorkout = () => {
  return;
};
const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
