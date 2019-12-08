const User = require("../models/User");
const Booking = require("../models/Booking");
const Vehicle = require("../models/Vehicle");
const Ticket = require("../models/Ticket");
const keys = require("../config/keys");
const client = require("twilio")(keys.twilioAccountSid, keys.twilioAuthToken);

exports.getBooking = (req, res) => {
  Booking.find()
    .then(bookings => res.json(bookings))
    .catch(err => console.log(err));
};

exports.deleteBooking = (req, res) => {
  Booking.findByIdAndRemove(req.params.id)
    .then(() => Booking.find().then(bookings => res.json(bookings)))
    .catch(err => console.log(err));

  client.messages.create({
    body: "Your Booking has been cancelled",
    from: "+12565703764",
    to: "+12565703764"
  });
};

exports.bookTicket = (req, res) => {
  const bookTicket = new Ticket({
    user: req.user._id,
    from: req.body.from,
    to: req.body.to,
    date: req.body.date,
    time: req.body.time,
    seats: req.body.seats
  });
  bookTicket
    .save()
    .then(ticket => res.status(201).json(ticket))
    .catch(err => console.log(`ERROR From adding ticket ${err}`));
};

exports.getTicket = (req, res) => {
  Ticket.find()
    .then(tickets => res.json(tickets))
    .catch(err => console.log(err));
};

exports.deleteTicket = (req, res) => {
  Ticket.findByIdAndRemove(req.params.id)
    .then(() => Ticket.find().then(bookings => res.json(bookings)))
    .catch(err => console.log(err));
};

exports.bookVehicle = (req, res) => {
  const bookVehicle = new Booking({
    user: req.user._id,
    from: req.body.from,
    to: req.body.to,
    address: req.body.address,
    date: req.body.date,
    time: req.body.time,
    seats: req.body.seats,
    type: req.body.type
  });
  client.messages
    .create({
      body: `from: ${req.body.from} to: ${req.body.to} Address: ${
        req.body.address
      } Seats: ${req.body.seats}`,
      from: "+12565703764",
      to: "+12565703764"
    })
    .then(message => console.log(message.sid))
    .catch(err => console.log("twilio err", err));
  bookVehicle
    .save()
    .then(booking => res.status(201).json(booking))
    .catch(err => console.log(`ERROR From adding vehicle ${err}`));
};

exports.getVehicle = (req, res) => {
  Vehicle.find()
    .then(vehicle => res.json(vehicle))
    .catch(err => console.log(err));
};
