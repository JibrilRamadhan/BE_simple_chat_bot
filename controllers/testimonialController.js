import * as Testimonial from "../models/testimonialModel.js";

export const getTestimonials = async (req, res) => {
  try {
    const data = await Testimonial.getAllTestimonials();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addTestimonial = async (req, res) => {
  try {
    const data = await Testimonial.createTestimonial(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const editTestimonial = async (req, res) => {
  try {
    const data = await Testimonial.updateTestimonial(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeTestimonial = async (req, res) => {
  try {
    const result = await Testimonial.deleteTestimonial(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
