const Workouts = require("../database/Workout");

const { v4: uuid } = require("uuid");

const getAllWorkout = () => {
  const allWorkouts = Workouts.getAllWorkout();
  return allWorkouts;
};

const getOneWorkout = (workoutId) => {
  const oneWorkout = Workouts.getOneWorkout(workoutId);
  return oneWorkout;
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = Workouts.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
  const updatedWorkout = Workouts.updateOneWorkout(workoutId, changes);
  console.log("updated workout", updatedWorkout);

  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
  Workouts.deleteOneWorkout(workoutId);
  return;
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
