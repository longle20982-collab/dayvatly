import pkg from 'pg';
const { Client } = pkg;

const connectionString = 'postgresql://postgres:nhatvanngoc112233@db.axzwunrbnozwqddoqjso.supabase.co:5432/postgres';

async function check() {
  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });
  await client.connect();

  const r1 = await client.query('SELECT count(*) FROM public.textbooks;');
  const r2 = await client.query('SELECT count(*) FROM public.chapters;');
  const r3 = await client.query('SELECT count(*) FROM public.lessons;');
  const r4 = await client.query('SELECT count(*) FROM public.resources;');
  const r5 = await client.query('SELECT count(*) FROM public.lesson_resources;');
  const vids = await client.query("SELECT id, title, url, duration FROM public.resources WHERE type LIKE 'video%' ORDER BY grade;");

  console.log('--- SUPABASE DATABASE SUMMARY ---');
  console.log(`Textbooks: ${r1.rows[0].count}`);
  console.log(`Chapters: ${r2.rows[0].count}`);
  console.log(`Lessons: ${r3.rows[0].count}`);
  console.log(`Resources: ${r4.rows[0].count}`);
  console.log(`Lesson-Resource Links: ${r5.rows[0].count}`);
  console.log('\n--- REAL YOUTUBE VIDEOS IN SUPABASE ---');
  vids.rows.forEach(v => console.log(`• [${v.id}] ${v.title} (${v.duration}) -> ${v.url}`));

  await client.end();
}

check();
