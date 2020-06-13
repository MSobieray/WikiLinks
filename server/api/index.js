const express = require('express')
const router = express.Router()
const db = require('../db');


router.use(function apiLog (req, res, next) {
  console.log('apiLog: ', req.path);
  next();
})

router.get('/wikis', (req, res) => {
  db
  .all(`SELECT wiki_id, page_name, page_slug, page_content, created_at, updated_at FROM wiki`, [], (err, rows) => {
    if(err) {
      // TODO: setup err logging
      console.log(err);
      res.sendStatus(500);
    }
    res.json(rows);
  })
})

router.post("/create", (req, res) => {
  const date = new Date();
  const {page_name, page_slug, page_content} = req.body;
 // save to searchable table
  db
  .run('INSERT INTO wiki VALUES(?, ?, ?, ?, ?, ?)', [, page_name, page_slug, page_content, date.toISOString(), date.toISOString() ], function insert(err, row) {
    if (err) {
      // TODO: setup err logging
      console.log(err);
      res.sendStatus(500);
    }
    res.send(`new row inserted at id ${this.lastID}`);
  }) 
});

router.post("/update/:id", (req, res) => {
  const date = new Date();
  const data = req.body;
  // delete from searchable table and insert new row
  // send orig content to the changelog
  db
  .run('UPDATE wiki SET page_content = ?, updated_at = ? WHERE wiki_id = ?', [data.page_content, date.toISOString(), data.wiki_id], function update(err) {
    if (err) {
      // TODO: setup err logging
      console.log(err);
      res.sendStatus(500);
    } 
    res.send(`row ${this} was updated`);
  })
})

router.get('/search', (req, res) => {
  db.all('SELECT * from searchable_wikis WHERE searchable_wikis MATCH ?', [req.query.search], (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.json(rows);
   })
})

router.post('/changelog/:id', (req, res) => {
  const date = new Date();
  const wiki = req.body;

  db
  .run('INSERT INTO changelog VALUES(?, ?, ?, ?, ?, ?)', [, wiki.page_content, wiki.updates, wiki.page_slug, wiki.wiki_id, date.toISOString()], function changelog(err) {
    if (err) {
      // TODO: setup err logging
      console.log(err);
      res.sendStatus(500);
    } 
    res.send(`new row inserted at id ${this.lastID}`);
  })
})

router.get('/changelog/:id', (req, res) => {
  db
  .all(`SELECT * FROM changelog WHERE wiki_id = ?`, [req.params.id], (err, rows) => {
    if(err) {
      // TODO: setup err logging
      console.log(err);
      res.sendStatus(500);
    }
    res.json(rows);
  })
})

module.exports = router;