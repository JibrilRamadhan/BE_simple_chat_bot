import * as Portfolio from "../models/portfolioModel.js";

export const getPortfolios = async (req, res) => {
  try {
    const data = await Portfolio.getAllPortfolios();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addPortfolio = async (req, res) => {
  try {
    const data = await Portfolio.createPortfolio(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const editPortfolio = async (req, res) => {
  try {
    const data = await Portfolio.updatePortfolio(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removePortfolio = async (req, res) => {
  try {
    const result = await Portfolio.deletePortfolio(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
