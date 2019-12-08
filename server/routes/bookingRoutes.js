const express = require("express");
const passport = require("passport");

require("../config/passport")(passport);

const bookingControllers = require("../controllers/bookingControllers");

const router = express.Router();

router.get(
  "/",
  // passport.authenticate("jwt", { session: false }),
  bookingControllers.getBooking
);
router.post(
  "/book",
  passport.authenticate("jwt", { session: false }),
  bookingControllers.bookVehicle
);
router.delete("/:id", bookingControllers.deleteBooking);

router.get(
  "/ticket",
  // passport.authenticate("jwt", { session: false }),
  bookingControllers.getTicket
);

router.post(
  "/ticket",
  passport.authenticate("jwt", { session: false }),
  bookingControllers.bookTicket
);

router.delete("/ticket/:id", bookingControllers.deleteTicket);

router.get("/vehicles", bookingControllers.getVehicle);

module.exports = router;
