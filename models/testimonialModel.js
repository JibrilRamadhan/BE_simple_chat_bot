import pool from "../db.js";

export const getAllTestimonials = async () => {
  const res = await pool.query("SELECT * FROM testimonials ORDER BY id DESC");
  return res.rows;
};

export const createTestimonial = async ({ name, handle, avatar, text, href }) => {
  const res = await pool.query(
    `INSERT INTO testimonials (name, handle, avatar, text, href)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [name, handle, avatar, text, href]
  );
  return res.rows[0];
};

export const updateTestimonial = async (id, data) => {
  const { name, handle, avatar, text, href } = data;

  const res = await pool.query(
    `UPDATE testimonials
     SET name=$1, handle=$2, avatar=$3, text=$4, href=$5
     WHERE id=$6 RETURNING *`,
    [name, handle, avatar, text, href, id]
  );

  return res.rows[0] || null;
};

export const deleteTestimonial = async (id) => {
  const res = await pool.query("DELETE FROM testimonials WHERE id=$1 RETURNING id", [id]);
  return res.rowCount > 0;
};
