import express from "express";
import {
  getTestimonials,
  addTestimonial,
  editTestimonial,
  removeTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

// GET semua testimonials
router.get("/", getTestimonials);

// POST tambah data baru
router.post("/", addTestimonial);

// PUT update data berdasarkan ID
router.put("/:id", editTestimonial);

// DELETE hapus berdasarkan ID
router.delete("/:id", removeTestimonial);

export default router;
