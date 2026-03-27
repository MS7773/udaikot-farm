import mongoose from "mongoose";

const resortSchema = mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  description: String,
  images: [String],
  availableRooms: Number
}, { timestamps: true });

const Resort = mongoose.model("Resort", resortSchema);
export default Resort;