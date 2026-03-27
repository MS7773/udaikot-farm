import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  resort: { type: mongoose.Schema.Types.ObjectId, ref: "Resort" },
  fromDate: Date,
  toDate: Date,
  totalAmount: Number
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;