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
    let schemaPath = path.join(__dirname, '../lib/db/schema.pgsql');
    
    // Fallback for Railway deployment
    if (!fs.existsSync(schemaPath)) {
      schemaPath = path.join(process.cwd(), 'lib/db/schema.pgsql');
    }
    
    if (!fs.existsSync(schemaPath)) {
      console.error('ERROR: Schema file not found at:', schemaPath);
      console.error('Current working directory:', process.cwd());
      console.error('Directory contents:', fs.readdirSync(process.cwd()));
      process.exit(1);
    }

    let schema = fs.readFileSync(schemaPath, 'utf8');
    
    // In production (Railway), replace 'user' role with actual database user
    if (process.env.NODE_ENV === 'production') {
      // Extract username from DATABASE_URL
      const match = databaseUrl.match(/postgresql:\/\/([^:]+):/);
      const dbUser = match ? match[1] : 'postgres';
      
      console.log(`Replacing role references with: ${dbUser}`);
      schema = schema.replace(/OWNER TO user;/g, `OWNER TO ${dbUser};`);
      schema = schema.replace(/GRANT .* TO user;/g, match => match.replace('user', dbUser));
    }
    
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