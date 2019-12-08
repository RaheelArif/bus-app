const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
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
  seats: Array
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
