const database = require("./db.json");

const getAllWorkout = () => {
  return database.workouts;
};

module.exports = { getAllWorkout };
