const Workouts = require("../database/Workout");

const { v4: uuid } = require("uuid");

const getAllWorkout = (filterParams) => {
  try {
    const allWorkouts = Workouts.getAllWorkout(filterParams);
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

const getOneWorkout = (workoutId) => {
  try {
    const oneWorkout = Workouts.getOneWorkout(workoutId);
    return oneWorkout;
  } catch (error) {
    throw error;
  }
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = Workouts.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = (workoutId, changes) => {
  try {
    const updatedWorkout = Workouts.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

const deleteOneWorkout = (workoutId) => {
  try {
    Workouts.deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
