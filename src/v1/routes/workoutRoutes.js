const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Get all workouts");
});

router.get("/:workoutId", async (req, res) => {
  res.send("get one workout");
});

router.post("/", async (req, res) => {
  res.send("create a new workouts coming from req.body");
});
router.update("/:workoutId", async (req, res) => {
  res.send("update given workout id: from req.body");
});
router.delete("/:workoutId", async (req, res) => {
  res.send("successfully deleted given id workout");
});

module.exports = router;
