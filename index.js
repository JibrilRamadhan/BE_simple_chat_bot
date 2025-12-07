import express from "express";
import cors from "cors";
import pool from "./db.js";

import testimonialRoutes from "./routes/testimonial.js";
import portfolioRoutes from "./routes/portfolio.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // body parser modern

// Routes
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/portfolios", portfolioRoutes);

// Root
app.get("/", (req, res) => {
  res.send("Backend BE_design_graphic jalan 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
