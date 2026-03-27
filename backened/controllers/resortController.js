import Resort from "../models/Resort.js";

// Get all resorts
export const getResorts = async (req, res) => {
  try {
    const resorts = await Resort.find();
    res.json(resorts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Add resort (Admin)
export const addResort = async (req, res) => {
  try {
    const resort = await Resort.create(req.body);
    res.json(resort);
  } catch (error) {
    res.status(500).json(error.message);
  }
};