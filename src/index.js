const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

app.use(express.json());
app.use(bodyparser.json());

app.use("/api/v1/workouts", v1WorkoutRouter);
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

app.listen(3001, () => {
  console.log("server is running");
  V1SwaggerDocs(app, 3001);
});
