const DB = require("./db.json");

const { saveToDatabase } = require("./utlis");

const getAllWorkout = (filterParams) => {
  try {
    let workouts = DB.workouts;
    if (filterParams.mode) {
      return DB.workouts.filter((workout) =>
        workout.mode.toLowerCase().includes(filterParams.mode)
      );
    }
    return workouts;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getOneWorkout = (workoutId) => {
  try {
    const oneWorkout = DB.workouts.filter((workout) => {
      if (workout.id === workoutId) {
        return workout;
      }
    });
    if (!oneWorkout) {
      throw {
        status: 400,
        message: `Cannot find workout with the given id ${workoutId}`,
      };
    }
    return oneWorkout;
  } catch (error) {
    throw { status: error?.status, message: error?.message || error };
  }
};

const updateOneWorkout = (workoutId, changes) => {
  try {
    const indexForUpdate = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    console.log("index for update", indexForUpdate);
    if (indexForUpdate === -1) {
      throw { status: 400, message: `cannot find work id with ${workoutId}` };
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
  } catch (error) {
    throw { status: error?.status, message: error?.message || error };
  }
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Workout with the name ${newWorkout} already exists`,
    };
  }
  try {
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const deleteOneWorkout = (workoutId) => {
  try {
    const workoutIdToDelete = DB.workouts.findIndex((workout) => {
      workout.id === workoutId;
    });

    if (workoutIdToDelete === -1) {
      throw {
        status: 400,
        message: `Cannot find workout of ${workoutId}`,
      };
    }

    DB.workouts.splice(workoutIdToDelete, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status, message: error?.message || error };
  }
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  updateOneWorkout,
  createNewWorkout,
  deleteOneWorkout,
};
