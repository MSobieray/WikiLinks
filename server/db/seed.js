const db = require('./index');

const dropWiki = `DROP TABLE if EXISTS wiki`;

const wikiTable = `CREATE TABLE wiki (
  wiki_id INTEGER PRIMARY KEY,
  page_name TEXT,
  page_slug TEXT,
  page_content TEXT,
  created_at DATE,
  updated_at DATE
  )`;

const dropSearchTable =`DROP TABLE if EXISTS searchable_wikis`;
const searchableWikiTable = `CREATE VIRTUAL TABLE searchable_wikis USING FTS5 (
  page_name,
  page_content,
  )`;

const dropChangelog =`DROP TABLE if EXISTS changelog`;
const changelogTable = `CREATE TABLE changelog (
  changelog_id INTEGER PRIMARY KEY,
  page_content TEXT,
  content_changes TEXT,
  page_name TEXT,
  wiki_id INTEGER NOT NULL,
  created_at DATE
  )`;
  
function setup() {
  db.serialize(() => {
    db
    .run(dropWiki)
    .run(dropSearchTable)
    .run(dropChangelog)
    .run(wikiTable)
    .run(searchableWikiTable)
    .run(changelogTable);
  })

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    } else {
      console.log('seeding complete');
    }
  });
}

setup();