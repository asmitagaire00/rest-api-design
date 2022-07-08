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
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(200).send({ status: "200", data: createdWorkout });
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
