import express from "express";
import { getResorts, addResort } from "../controllers/resortController.js";

const router = express.Router();

router.get("/", getResorts);
router.post("/", addResort);

export default router;