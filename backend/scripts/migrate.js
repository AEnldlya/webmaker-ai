const pool = require('./config/database');
const { createTables } = require('../migrations/001_initial');

const runMigrations = async () => {
  try {
    await createTables();
    console.log('Migrations completed');
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
};

runMigrations();
