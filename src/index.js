const express = require("express");
const app = express();
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

app.use(express.json());

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(3001, () => {
  console.log("server is running");
});