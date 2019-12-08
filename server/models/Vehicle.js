const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  booking: {
    type: Schema.Types.ObjectId,
    ref: "Booking",
    default: null
  },
  vehicle: {
    type: String,
    required: true
  },
  vehiclename: {
    type: String
  },
  vehicleimg: {
    type: String
  }
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
