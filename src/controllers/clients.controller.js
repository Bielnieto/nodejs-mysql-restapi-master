import { pool } from "../db.js";

export const getClients = async (req, res) => {
  try {
    const { destination } = req.query;

    let query = "SELECT * FROM clients";
    let params = [];

    if (destination) {
      query += " WHERE Desti_de_viatge = ?";
      params.push(destination);
    }

    const [rows] = await pool.query(query, params);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No clients found" });
    }

    res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getClient = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM clients WHERE id = ?", [id]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM clients WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createClient = async (req, res) => {
  try {
    const { nom, cognoms, telefon, correu_electronic, desti_de_viatge } =
      req.body;
    const [rows] = await pool.query(
      "INSERT INTO clients (nom, cognoms, telefon, correu_electronic, desti_de_viatge) VALUES (?, ?, ?, ?, ?)",
      [nom, cognoms, telefon, correu_electronic, desti_de_viatge]
    );
    res.status(201).json({ id: rows.insertId, ...req.body });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, cognoms, telefon, correu_electronic, desti_de_viatge } =
      req.body;

    const [result] = await pool.query(
      "UPDATE clients SET nom = IFNULL(?, nom), cognoms = IFNULL(?, cognoms), telefon = IFNULL(?, telefon), correu_electronic = IFNULL(?, correu_electronic), desti_de_viatge = IFNULL(?, desti_de_viatge) WHERE id = ?",
      [nom, cognoms, telefon, correu_electronic, desti_de_viatge, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Client not found" });

    const [rows] = await pool.query("SELECT * FROM clients WHERE id = ?", [id]);

    res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
