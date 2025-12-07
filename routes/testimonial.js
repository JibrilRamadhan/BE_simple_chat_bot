import express from "express";
import {
  getTestimonials,
  addTestimonial,
  editTestimonial,
  removeTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", getTestimonials);
router.post("/", addTestimonial);
router.put("/:id", editTestimonial);
router.delete("/:id", removeTestimonial);

export default router;
