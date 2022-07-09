const DB = require("./db.json");

const { saveToDatabase } = require("./utlis");

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId);
    if (!record) {
      throw { status: 400, message: `Cannot find record of ${workoutId}` };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getRecordForWorkout };
