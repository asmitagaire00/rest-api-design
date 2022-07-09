const workoutService = require("../services/workoutService");

const getAllWorkout = (req, res) => {
  const { mode } = req.query;
  try {
    const allWorkouts = workoutService.getAllWorkout({ mode });
    res.send({ status: "ok", data: allWorkouts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
};

const getOneWorkout = (req, res) => {
  const { params: workoutId } = req;
  if (!workoutId) {
    res.status(400).send({
      status: "Failed",
      data: { error: `parameter ${workoutId} cannot be empty` },
    });
  }
  try {
    const oneWorkout = workoutService.getOneWorkout(workoutId);
    res.status(200).send({ status: "ok", data: oneWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
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
    res.status(400).send({
      status: "Failed",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name','mode', 'equipment', 'exercises', 'trainerTips'",
      },
    });
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(200).send({ status: "200", data: createdWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
};

const updateOneWorkout = (req, res) => {
  const {
    params: { workoutId },
    body,
  } = req;
  if (!workoutId) {
    res.status(400).send({
      status: "Failed",
      data: {
        error: `Parameter ${workoutId} cannot be empty`,
      },
    });
  }
  try {
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
    console.log("updated workout", updatedWorkout);
    res.status(200).send({ status: "ok", data: updatedWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
};

const deleteOneWorkout = (req, res) => {
  const { workoutId } = req.body;
  if (!workoutId) {
    res.status(400).send({
      status: "Failed",
      data: { error: `Parameter ${workoutId} cannot be empty` },
    });
  }
  try {
    workoutService.deleteOneWorkout(workoutId);
    res.status(200).send({ status: "ok" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
