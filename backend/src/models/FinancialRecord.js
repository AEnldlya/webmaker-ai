const pool = require('../config/database');

class FinancialRecord {
  static async findAll(limit = 100, offset = 0) {
    const result = await pool.query(
      `SELECT fr.*, w.business_name 
       FROM financial_records fr 
       LEFT JOIN websites w ON fr.website_id = w.id 
       ORDER BY fr.recorded_at DESC LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    return result.rows;
  }

  static async create(data) {
    const { website_id, type, amount_cents, category } = data;
    const result = await pool.query(
      `INSERT INTO financial_records (website_id, type, amount_cents, category)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [website_id, type, amount_cents, category]
    );
    return result.rows[0];
  }

  static async getDailySummary() {
    const result = await pool.query(
      `SELECT 
        DATE(recorded_at) as date,
        type,
        SUM(amount_cents) as total_cents
       FROM financial_records
       GROUP BY DATE(recorded_at), type
       ORDER BY date DESC`
    );
    return result.rows;
  }

  static async getMonthlySummary() {
    const result = await pool.query(
      `SELECT 
        DATE_TRUNC('month', recorded_at) as month,
        type,
        SUM(amount_cents) as total_cents
       FROM financial_records
       GROUP BY DATE_TRUNC('month', recorded_at), type
       ORDER BY month DESC`
    );
    return result.rows;
  }

  static async getSummary() {
    const result = await pool.query(
      `SELECT 
        type,
        SUM(amount_cents) as total_cents
       FROM financial_records
       GROUP BY type`
    );
    return result.rows;
  }
}

module.exports = FinancialRecord;
