import { StatusCodes } from "http-status-codes";
import pool from "../../db.js";

export const getallcategory = async (req, res) => {
  const data = await pool.query(`select * from product_category`);

  res.status(StatusCodes.OK).json({ data });
};

export const addcategory = async (req, res) => {
  const { category, productname, product_id, purchase_date, owner, status } =
    req.body;
  // req.body.purchase_date = "2021-04-08";

  try {
    const insertQuery = `
      INSERT INTO public.product_category(category, product, product_id, purchase_date, owner, status)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id;
    `;

    const values = [category, productname, null, purchase_date, owner, status];
    const result = await pool.query(insertQuery, values);

    const insertedId = result.rows[0].id;

    res.status(StatusCodes.OK).json({ insertedId });
  } catch (error) {
    console.error("Error inserting data:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "An error occurred while inserting data" });
  }
};
