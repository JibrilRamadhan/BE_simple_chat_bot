import pool from "../db.js";

export const getAllPortfolios = async () => {
  const res = await pool.query("SELECT * FROM portfolios ORDER BY id DESC");
  return res.rows;
};

export const createPortfolio = async ({ title, description, image, category }) => {
  const res = await pool.query(
    "INSERT INTO portfolios (title, description, image, category) VALUES ($1,$2,$3,$4) RETURNING *",
    [title, description, image, category]
  );
  return res.rows[0];
};

export const updatePortfolio = async (id, { title, description, image, category }) => {
  const res = await pool.query(
    "UPDATE portfolios SET title=$1, description=$2, image=$3, category=$4 WHERE id=$5 RETURNING *",
    [title, description, image, category, id]
  );
  return res.rows[0];
};

export const deletePortfolio = async (id) => {
  await pool.query("DELETE FROM portfolios WHERE id=$1", [id]);
  return { message: "Deleted successfully" };
};
