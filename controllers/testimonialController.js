import * as Testimonial from "../models/testimonialModel.js";

export const getTestimonials = async (req, res) => {
  try {
    const data = await Testimonial.getAllTestimonials();
    res.status(200).json(data);
  } catch (err) {
    console.error("GET testimonials error:", err);
    res.status(500).json({ error: "Gagal mengambil data testimonials" });
  }
};

export const addTestimonial = async (req, res) => {
  try {
    const { name, text } = req.body;

    if (!name || !text) {
      return res.status(400).json({ error: "Name dan Text wajib diisi" });
    }

    const data = await Testimonial.createTestimonial(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error("POST testimonial error:", err);
    res.status(500).json({ error: "Gagal menambahkan testimonial" });
  }
};

export const editTestimonial = async (req, res) => {
  try {
    const updated = await Testimonial.updateTestimonial(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({ error: "Testimonial tidak ditemukan" });
    }

    res.json(updated);
  } catch (err) {
    console.error("PUT testimonial error:", err);
    res.status(500).json({ error: "Gagal mengupdate testimonial" });
  }
};

export const removeTestimonial = async (req, res) => {
  try {
    const result = await Testimonial.deleteTestimonial(req.params.id);

    if (!result) {
      return res.status(404).json({ error: "Testimonial tidak ditemukan" });
    }

    res.json({ message: "Testimonial berhasil dihapus" });
  } catch (err) {
    console.error("DELETE testimonial error:", err);
    res.status(500).json({ error: "Gagal menghapus testimonial" });
  }
};
