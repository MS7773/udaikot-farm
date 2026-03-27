import Booking from "../models/Booking.js";

// Create booking
export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.json(booking);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Get user bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("resort");
    res.json(bookings);
  } catch (error) {
    res.status(500).json(error.message);
  }
};