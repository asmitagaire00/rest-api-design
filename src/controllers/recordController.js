const recordService = require("../services/recordService");

const getRecordForWorkout = (workoutId) => {
  try {
    const record = recordService.getRecordForWorkout(workoutId);
    res.status(200).send({ status: "OK", data: record });
  } catch (error) {
    res.status(400).send({
      status: "Failed",
      data: { status: error?.status, message: error?.message || error },
    });
  }
};

module.exports = { getRecordForWorkout };
