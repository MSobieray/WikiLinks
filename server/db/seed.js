const db = require('./index');

const dropWiki = `DROP TABLE if EXISTS wikis`;
const wikiTable = `CREATE VIRTUAL TABLE wikis USING FTS5( 
  page_name,
  page_slug,
  page_content,
  created_at,
  updated_at
  )`
  
function setup() {
  db.serialize(() => {
    db
    .run(dropWiki)
    .run(wikiTable);
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