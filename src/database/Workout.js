const DB = require("./db.json");

const { saveToDatabase } = require("./utlis");

const getAllWorkout = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId) => {
  const oneWorkout = DB.workouts.filter((workout) => {
    if (workout.id === workoutId) {
      return workout;
    }
  });
  return oneWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  console.log("index for update", indexForUpdate);
  if (indexForUpdate === -1) {
    return;
  }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  console.log("updated workout", updatedWorkout);
  return updatedWorkout;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

const deleteOneWorkout = (workoutId) => {
  const workoutIdToDelete = DB.workouts.findIndex((workout) => {
    workout.id === workoutId;
  });

  if (workoutIdToDelete === -1) {
    return;
  }

  DB.workouts.splice(workoutIdToDelete, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  updateOneWorkout,
  createNewWorkout,
  deleteOneWorkout,
};
