const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(`${__dirname}/wiki.db`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the wiki database.');
  }
});

module.exports = db;