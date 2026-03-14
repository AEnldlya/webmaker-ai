const pool = require('../config/database');

class Prospect {
  static async findAll(limit = 100, offset = 0) {
    const result = await pool.query(
      'SELECT * FROM prospects ORDER BY created_at DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM prospects WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const { name, phone, email, category, address, city, state, zip } = data;
    const result = await pool.query(
      `INSERT INTO prospects (name, phone, email, category, address, city, state, zip)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [name, phone, email, category, address, city, state, zip]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const { name, phone, email, category, address, city, state, zip, call_status, website_id } = data;
    const result = await pool.query(
      `UPDATE prospects 
       SET name = $1, phone = $2, email = $3, category = $4, address = $5, 
           city = $6, state = $7, zip = $8, call_status = $9, website_id = $10,
           discovered_at = CURRENT_TIMESTAMP
       WHERE id = $11
       RETURNING *`,
      [name, phone, email, category, address, city, state, zip, call_status, website_id, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM prospects WHERE id = $1', [id]);
    return { id };
  }

  static async count() {
    const result = await pool.query('SELECT COUNT(*) FROM prospects');
    return parseInt(result.rows[0].count);
  }
}

module.exports = Prospect;
