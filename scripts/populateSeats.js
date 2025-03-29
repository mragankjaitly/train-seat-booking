const sequelize = require("../config/database");
const Seat = require("../models/Seat");
const Train = require("../models/train");

async function populateSeats() {
  await sequelize.sync();

  const trains = await Train.findAll();
  for (const train of trains) {
    for (let i = 1; i <= 80; i++) {
      await Seat.create({ trainId: train.id, seatNumber: i });
    }
  }
  console.log("✅ Seats populated!");
  process.exit();
}

populateSeats().catch(console.error);
