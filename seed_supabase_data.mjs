import pkg from 'pg';
const { Client } = pkg;
import { INITIAL_TEXTBOOKS, INITIAL_CHAPTERS, INITIAL_LESSONS, INITIAL_RESOURCES } from './src/services/sampleData.js';

const connectionString = 'postgresql://postgres:nhatvanngoc112233@db.axzwunrbnozwqddoqjso.supabase.co:5432/postgres';

async function seed() {
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('Seeding Supabase database...');

    // 1. Textbooks
    for (const tb of INITIAL_TEXTBOOKS) {
      await client.query(`
        INSERT INTO public.textbooks (id, name, publisher, is_default)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (id) DO UPDATE SET name = $2, publisher = $3, is_default = $4;
      `, [tb.id, tb.name, tb.publisher, tb.isDefault]);
    }
    console.log(`✓ Seeded ${INITIAL_TEXTBOOKS.length} textbooks`);

    // 2. Chapters
    for (const ch of INITIAL_CHAPTERS) {
      await client.query(`
        INSERT INTO public.chapters (id, grade, textbook_id, name, description, order_num, is_special_topic)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id) DO UPDATE SET name = $4, description = $5, order_num = $6, is_special_topic = $7;
      `, [ch.id, ch.grade, ch.textbookId, ch.name, ch.description || '', ch.order, !!ch.isSpecialTopic]);
    }
    console.log(`✓ Seeded ${INITIAL_CHAPTERS.length} chapters`);

    // 3. Lessons
    for (const les of INITIAL_LESSONS) {
      await client.query(`
        INSERT INTO public.lessons (
          id, grade, chapter_id, chapter_name, title, order_num, textbook_id,
          status, author_id, author_name, is_sample, is_special_topic,
          objectives, key_knowledge, illustrations, practice_exercises
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
        ON CONFLICT (id) DO UPDATE SET
          title = $5, objectives = $13, key_knowledge = $14,
          illustrations = $15, practice_exercises = $16, updated_at = NOW();
      `, [
        les.id, les.grade, les.chapterId, les.chapterName, les.title, les.order, les.textbookId,
        les.status, les.authorId, les.authorName, !!les.isSample, !!les.isSpecialTopic,
        JSON.stringify(les.objectives || {}), JSON.stringify(les.keyKnowledge || {}),
        JSON.stringify(les.illustrations || []), JSON.stringify(les.practiceExercises || [])
      ]);
    }
    console.log(`✓ Seeded ${INITIAL_LESSONS.length} lessons`);

    // Fix check constraint to allow 'draft' in review_status
    await client.query(`
      ALTER TABLE public.resources DROP CONSTRAINT IF EXISTS resources_review_status_check;
      ALTER TABLE public.resources ADD CONSTRAINT resources_review_status_check CHECK (review_status IN ('draft', 'pending', 'approved', 'rejected'));
    `);

    // 4. Resources
    for (const res of INITIAL_RESOURCES) {
      await client.query(`
        INSERT INTO public.resources (
          id, title, description, type, grade, chapter_id, textbook_id,
          author, author_id, source, license_info, status, review_status,
          review_notes, url, embed_type, file_type, file_size, duration,
          tags, guiding_questions, experiment_data
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
        ON CONFLICT (id) DO UPDATE SET
          title = $2, description = $3, url = $15, duration = $19, updated_at = NOW();
      `, [
        res.id, res.title, res.description || '', res.type, res.grade, res.chapterId || null, res.textbookId || null,
        res.author || 'Ths: Lê Long - QT', res.authorId || null, res.source || '', res.licenseInfo || '',
        res.status || 'published', res.reviewStatus || 'approved', res.reviewNotes || '',
        res.url || null, res.embedType || null, res.fileType || null, res.fileSize || null, res.duration || null,
        res.tags || [], res.guidingQuestions || [], JSON.stringify(res.experimentData || {})
      ]);
    }
    console.log(`✓ Seeded ${INITIAL_RESOURCES.length} resources`);

    // 5. Lesson - Resources links
    let linkCount = 0;
    for (const les of INITIAL_LESSONS) {
      if (les.linkedResourceIds && les.linkedResourceIds.length > 0) {
        for (const resId of les.linkedResourceIds) {
          await client.query(`
            INSERT INTO public.lesson_resources (lesson_id, resource_id)
            SELECT $1, $2
            WHERE EXISTS (SELECT 1 FROM public.resources WHERE id = $2)
            ON CONFLICT DO NOTHING;
          `, [les.id, resId]);
          linkCount++;
        }
      }
    }
    console.log(`✓ Seeded ${linkCount} lesson-resource junction links`);

    console.log('🎉 ALL SUPABASE DATA SEEDED SUCCESSFULLY!');

  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await client.end();
  }
}

seed();
