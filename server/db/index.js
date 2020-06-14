const sqlite3 = require('sqlite3').verbose();
const {dirname} = require('path');

let db = new sqlite3.Database(`${dirname('./db/wiki.db')}/wiki.db`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the wiki database.');
});

module.exports = db;