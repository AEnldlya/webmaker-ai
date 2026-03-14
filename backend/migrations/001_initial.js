const pool = require('../config/database');

const createTables = async () => {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');

    // Prospects table
    await client.query(`
      CREATE TABLE IF NOT EXISTS prospects (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        email VARCHAR(255),
        category VARCHAR(100),
        address TEXT,
        city VARCHAR(100),
        state VARCHAR(100),
        zip VARCHAR(20),
        call_status VARCHAR(50) DEFAULT 'new',
        website_id UUID,
        discovered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Websites table
    await client.query(`
      CREATE TABLE IF NOT EXISTS websites (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        prospect_id UUID REFERENCES prospects(id) ON DELETE CASCADE,
        business_name VARCHAR(255) NOT NULL,
        business_type VARCHAR(100),
        github_url TEXT,
        vercel_url TEXT,
        custom_domain VARCHAR(255),
        status VARCHAR(50) DEFAULT 'draft',
        lighthouse_score INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Payments table
    await client.query(`
      CREATE TABLE IF NOT EXISTS payments (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
        amount_cents INTEGER NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        stripe_session_id VARCHAR(255),
        paid_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Financial records table
    await client.query(`
      CREATE TABLE IF NOT EXISTS financial_records (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
        type VARCHAR(50) NOT NULL,
        amount_cents INTEGER NOT NULL,
        category VARCHAR(100),
        recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Domains table
    await client.query(`
      CREATE TABLE IF NOT EXISTS domains (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
        domain_name VARCHAR(255) NOT NULL,
        registrar VARCHAR(100),
        price_cents INTEGER,
        status VARCHAR(50) DEFAULT 'pending',
        purchased_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Deployments table
    await client.query(`
      CREATE TABLE IF NOT EXISTS deployments (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
        vercel_deployment_id VARCHAR(255),
        status VARCHAR(50) DEFAULT 'pending',
        preview_url TEXT,
        deployed_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await client.query('COMMIT');
    console.log('Database tables created successfully');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error creating tables:', err);
    throw err;
  } finally {
    client.release();
  }
};

module.exports = { createTables };
