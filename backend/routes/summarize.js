import express from "express";
import { summarizeText } from "../controllers/summarizeController.js"; 

const router = express.Router();

router.post("/", summarizeText);

export default router;
