const Vehicle = require("../models/Vehicle");

exports.addVehicle = (req, res) => {
  const newVehicle = new Vehicle({
    vehicle: req.body.vehicle,
    from: req.body.from,
    to: req.body.to,
    vehiclename: req.body.vehiclename,
    vehicleimg: req.body.vehicleimg
  });
  newVehicle
    .save()
    .then(vehicle => res.status(201).json(vehicle))
    .catch(err => console.log(`ERROR From adding vehicle ${err}`));
};
