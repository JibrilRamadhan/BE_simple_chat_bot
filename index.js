import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pool from "./db.js"; // koneksi db
import testimonialRoutes from "./routes/testimonial.js";
import portfolioRoutes from "./routes/portfolio.js";


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/portfolios", portfolioRoutes);

// Route dasar
app.get("/", (req, res) => {
  res.send("Backend BE_design_graphic jalan 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
