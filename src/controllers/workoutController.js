const workoutService = require("../services/workoutService");

const getAllWorkout = (req, res) => {
  const allWorkouts = workoutService.getAllWorkout();
  res.send({ status: "ok", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const { id } = req.body;
  const oneWorkout = workoutService.getOneWorkout(id);
  res.status(200).send({ status: "ok", data: oneWorkout });
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
  const {
    params: { workoutId },
    body,
  } = req;
  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
  console.log("updated workout", updatedWorkout);
  res.status(200).send({ status: "ok", data: updatedWorkout });
};

const deleteOneWorkout = (req, res) => {
  const { workoutId } = req.body;
  workoutService.deleteOneWorkout(workoutId);
  res.status(200).send({ status: "ok" });
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
