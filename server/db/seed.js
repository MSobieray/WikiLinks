const db = require('./index');

const dropWiki = `DROP TABLE if EXISTS wikis`;
const wikiTable = `CREATE TABLE wikis( 
  page_name text,
  page_slug text,
  page_content text,
  created_at date,
  updated_at date
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