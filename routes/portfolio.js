import express from "express";
import {
  getPortfolios,
  addPortfolio,
  editPortfolio,
  removePortfolio,
} from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/", getPortfolios);
router.post("/", addPortfolio);
router.put("/:id", editPortfolio);
router.delete("/:id", removePortfolio);

export default router;
