const pool = require('../config/database');

class Domain {
  static async findAll(limit = 100, offset = 0) {
    const result = await pool.query(
      `SELECT d.*, w.business_name 
       FROM domains d 
       LEFT JOIN websites w ON d.website_id = w.id 
       ORDER BY d.created_at DESC LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM domains WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const { website_id, domain_name, registrar, price_cents } = data;
    const result = await pool.query(
      `INSERT INTO domains (website_id, domain_name, registrar, price_cents)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [website_id, domain_name, registrar, price_cents]
    );
    return result.rows[0];
  }

  static async updateStatus(id, status, purchased_at = null) {
    const result = await pool.query(
      `UPDATE domains 
       SET status = $1, purchased_at = $2
       WHERE id = $3
       RETURNING *`,
      [status, purchased_at, id]
    );
    return result.rows[0];
  }
}

module.exports = Domain;
