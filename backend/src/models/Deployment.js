const pool = require('../config/database');

class Deployment {
  static async findAll(limit = 100, offset = 0) {
    const result = await pool.query(
      `SELECT d.*, w.business_name 
       FROM deployments d 
       LEFT JOIN websites w ON d.website_id = w.id 
       ORDER BY d.created_at DESC LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM deployments WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async findByWebsiteId(website_id) {
    const result = await pool.query(
      'SELECT * FROM deployments WHERE website_id = $1 ORDER BY created_at DESC',
      [website_id]
    );
    return result.rows;
  }

  static async create(data) {
    const { website_id, vercel_deployment_id, preview_url } = data;
    const result = await pool.query(
      `INSERT INTO deployments (website_id, vercel_deployment_id, preview_url)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [website_id, vercel_deployment_id, preview_url]
    );
    return result.rows[0];
  }

  static async updateStatus(id, status, deployed_at = null) {
    const result = await pool.query(
      `UPDATE deployments 
       SET status = $1, deployed_at = $2
       WHERE id = $3
       RETURNING *`,
      [status, deployed_at, id]
    );
    return result.rows[0];
  }
}

module.exports = Deployment;
