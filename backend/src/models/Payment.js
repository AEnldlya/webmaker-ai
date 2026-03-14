const pool = require('../config/database');

class Payment {
  static async findAll(limit = 100, offset = 0) {
    const result = await pool.query(
      `SELECT p.*, w.business_name 
       FROM payments p 
       LEFT JOIN websites w ON p.website_id = w.id 
       ORDER BY p.created_at DESC LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query(
      'SELECT * FROM payments WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create(data) {
    const { website_id, amount_cents, stripe_session_id } = data;
    const result = await pool.query(
      `INSERT INTO payments (website_id, amount_cents, stripe_session_id)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [website_id, amount_cents, stripe_session_id]
    );
    return result.rows[0];
  }

  static async updateStatus(id, status, paid_at = null) {
    const result = await pool.query(
      `UPDATE payments 
       SET status = $1, paid_at = $2
       WHERE id = $3
       RETURNING *`,
      [status, paid_at, id]
    );
    return result.rows[0];
  }

  static async getTotalRevenue() {
    const result = await pool.query(
      "SELECT COALESCE(SUM(amount_cents), 0) as total FROM payments WHERE status = 'paid'"
    );
    return parseInt(result.rows[0].total);
  }
}

module.exports = Payment;
