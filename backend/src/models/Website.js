const pool = require('../config/database');

class Website {
  static async findAll(limit = 100, offset = 0) {
    const result = await pool.query(
      'SELECT w.*, p.name as prospect_name FROM websites w LEFT JOIN prospects p ON w.prospect_id = p.id ORDER BY w.created_at DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query(
      'SELECT w.*, p.name as prospect_name FROM websites w LEFT JOIN prospects p ON w.prospect_id = p.id WHERE w.id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create(data) {
    const { prospect_id, business_name, business_type } = data;
    const result = await pool.query(
      `INSERT INTO websites (prospect_id, business_name, business_type)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [prospect_id, business_name, business_type]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const { business_name, business_type, github_url, vercel_url, custom_domain, status, lighthouse_score } = data;
    const result = await pool.query(
      `UPDATE websites 
       SET business_name = $1, business_type = $2, github_url = $3, vercel_url = $4,
           custom_domain = $5, status = $6, lighthouse_score = $7
       WHERE id = $8
       RETURNING *`,
      [business_name, business_type, github_url, vercel_url, custom_domain, status, lighthouse_score, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM websites WHERE id = $1', [id]);
    return { id };
  }

  static async count() {
    const result = await pool.query('SELECT COUNT(*) FROM websites');
    return parseInt(result.rows[0].count);
  }
}

module.exports = Website;
