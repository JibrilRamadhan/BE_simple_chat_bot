import express from "express";
import {
  getPortfolios,
  addPortfolio,
  editPortfolio,
  removePortfolio,
} from "../controllers/portfolioController.js";

const router = express.Router();

// GET semua portfolios
router.get("/", getPortfolios);

// POST buat data baru
router.post("/", addPortfolio);

// PUT update data
router.put("/:id", editPortfolio);

// DELETE hapus data
router.delete("/:id", removePortfolio);

export default router;
