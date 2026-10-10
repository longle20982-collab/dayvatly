import fs from 'fs';
import pkg from 'pg';
const { Client } = pkg;

const connectionString = 'postgresql://postgres:nhatvanngoc112233@db.axzwunrbnozwqddoqjso.supabase.co:5432/postgres';

async function migrate() {
  console.log('Connecting to Supabase PostgreSQL at db.axzwunrbnozwqddoqjso.supabase.co:5432...');
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('Connected to Supabase PostgreSQL successfully!');

    const sqlPath = 'C:\\Users\\HP\\.gemini\\antigravity\\scratch\\init_supabase_schema.sql';
    const sql = fs.readFileSync(sqlPath, 'utf8');

    console.log('Executing database schema creation & RLS policies...');
    await client.query(sql);
    console.log('Schema created successfully!');

    // Verify tables created
    const res = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name;
    `);
    console.log('Public tables in Supabase:');
    res.rows.forEach(r => console.log(' - ' + r.table_name));

  } catch (err) {
    console.error('Migration error:', err.message);
  } finally {
    await client.end();
  }
}

migrate();
