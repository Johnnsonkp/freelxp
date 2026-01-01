const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

async function runMigrations() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.error('ERROR: DATABASE_URL environment variable is not set');
    process.exit(1);
  }

  console.log('Connecting to database...');
  
  const client = new Client({
    connectionString: databaseUrl,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
  });

  try {
    await client.connect();
    console.log('Connected to database successfully');

    // Read schema file - check multiple possible locations
    let schemaPath = path.join(__dirname, '../lib/db/schema.sql');
    
    // Fallback for Railway deployment
    if (!fs.existsSync(schemaPath)) {
      schemaPath = path.join(process.cwd(), 'lib/db/schema.sql');
    }
    
    if (!fs.existsSync(schemaPath)) {
      console.error('ERROR: Schema file not found at:', schemaPath);
      console.error('Current working directory:', process.cwd());
      console.error('Directory contents:', fs.readdirSync(process.cwd()));
      process.exit(1);
    }

    const schema = fs.readFileSync(schemaPath, 'utf8');
    console.log('Running migrations...');

    await client.query(schema);
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('ERROR: Migration failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  } finally {
    await client.end();
    console.log('Database connection closed');
  }
}

runMigrations();