// 📁 routes/seatRoutes.js
const express = require("express");
const Seat = require("../models/Seat");
const router = express.Router();

// Initialize 80 seats
router.post("/init-seats", async (req, res) => {
  try {
    const seats = [];
    let seatNum = 1;
    for (let row = 1; row <= 12; row++) {
      const count = row === 12 ? 3 : 7;
      for (let i = 0; i < count; i++) {
        seats.push({ seat_number: seatNum++, row_number: row, is_booked: false });
      }
    }
    await Seat.bulkCreate(seats);
    res.json({ message: "Seats initialized successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error initializing seats", details: error.message });
  }
});

// Get all seats
router.get("/", async (req, res) => {
  try {
    const seats = await Seat.findAll();
    res.json(seats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch seats" });
  }
});

// Book seats (1-7 max)
router.post("/book", async (req, res) => {
  const { count } = req.body;
  if (!count || count < 1 || count > 7) {
    return res.status(400).json({ error: "Book 1 to 7 seats only." });
  }

  try {
    const allSeats = await Seat.findAll({ order: [["seat_number", "ASC"]] });
    const available = allSeats.filter(seat => !seat.is_booked);
    if (available.length < count) return res.status(400).json({ error: "Not enough seats available." });

    const grouped = {};
    for (const seat of available) {
      if (!grouped[seat.row_number]) grouped[seat.row_number] = [];
      grouped[seat.row_number].push(seat);
    }

    let toBook = [];
    for (const row of Object.values(grouped)) {
      if (row.length >= count) {
        toBook = row.slice(0, count);
        break;
      }
    }

    if (toBook.length === 0) toBook = available.slice(0, count);
    const booking = toBook.map(seat => Seat.update({ is_booked: true }, { where: { id: seat.id } }));
    await Promise.all(booking);

    res.json({ message: "✅ Seats booked!", seats: toBook.map(seat => seat.seat_number) });
  } catch (err) {
    res.status(500).json({ error: "Booking failed." });
  }
});

// Reset all bookings
router.post("/reset", async (req, res) => {
  try {
    await Seat.update({ is_booked: false }, { where: {} });
    res.json({ message: "✅ All bookings reset!" });
  } catch (error) {
    res.status(500).json({ error: "Reset failed." });
  }
});

module.exports = router;
