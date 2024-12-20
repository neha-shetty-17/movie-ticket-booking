const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = 5000;
const bookingsFile = "bookings.json";

// Load bookings from file
let bookings = [];
if (fs.existsSync(bookingsFile)) {
  const data = fs.readFileSync(bookingsFile, "utf8");
  bookings = JSON.parse(data);
}

// Save bookings to file
const saveBookings = () => {
  fs.writeFileSync(bookingsFile, JSON.stringify(bookings, null, 2));
};

app.post("/api/book", (req, res) => {
  const { movieTitle, row, col } = req.body;

  if (!movieTitle || !row || !col) {
    return res.status(400).json({ message: "Missing booking information." });
  }

  bookings.push({ movieTitle, row, col });
  saveBookings();
  console.log(`Booking successful for ${movieTitle}, Row: ${row}, Col: ${col}`);
  res.status(200).json({ message: "Booking successful!" });
});

app.get("/api/book", (req, res) => {
  res.status(200).json(bookings);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
