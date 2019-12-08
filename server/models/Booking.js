const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    red: "User"
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  time: String,
  date: String,
  address: String,
  seats: String,
  type: String
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
