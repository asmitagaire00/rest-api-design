const express = require("express");
const router = express.Router();

const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

router.get("/", workoutController.getAllWorkout);

router.get("/:workoutId", workoutController.getOneWorkout);
router.get("/:workoutId/record", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.put("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
