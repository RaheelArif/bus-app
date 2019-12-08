const express = require("express");

const vehicleControllers = require("../controllers/vehicleControllers");

const router = express.Router();

router.post("/add", vehicleControllers.addVehicle);

module.exports = router;
