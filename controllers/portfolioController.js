import * as Portfolio from "../models/portfolioModel.js";

export const getPortfolios = async (req, res) => {
  try {
    const data = await Portfolio.getAllPortfolios();
    res.status(200).json(data);
  } catch (err) {
    console.error("GET portfolios error:", err);
    res.status(500).json({ error: "Gagal mengambil data portfolios" });
  }
};

export const addPortfolio = async (req, res) => {
  try {
    const { title, description, image, category } = req.body;

    if (!title || !image) {
      return res.status(400).json({ error: "Title dan Image wajib diisi" });
    }

    const data = await Portfolio.createPortfolio(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error("POST portfolio error:", err);
    res.status(500).json({ error: "Gagal menambahkan portfolio" });
  }
};

export const editPortfolio = async (req, res) => {
  try {
    const updated = await Portfolio.updatePortfolio(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({ error: "Portfolio tidak ditemukan" });
    }

    res.json(updated);
  } catch (err) {
    console.error("PUT portfolio error:", err);
    res.status(500).json({ error: "Gagal mengupdate portfolio" });
  }
};

export const removePortfolio = async (req, res) => {
  try {
    const result = await Portfolio.deletePortfolio(req.params.id);

    if (!result) {
      return res.status(404).json({ error: "Portfolio tidak ditemukan" });
    }

    res.json({ message: "Portfolio berhasil dihapus" });
  } catch (err) {
    console.error("DELETE portfolio error:", err);
    res.status(500).json({ error: "Gagal menghapus portfolio" });
  }
};
