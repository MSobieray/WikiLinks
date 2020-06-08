const express = require('express')
const router = express.Router()
const db = require('../db');


router.use(function apiLog (req, res, next) {
  console.log('apiLog: ', req.path);
  next();
})

router.get('/wikis', (req, res) => {
  db
  .all(`SELECT rowid, page_name, page_slug, page_content, created_at, updated_at FROM wikis`, [], (err, rows) => {
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
 
  db
  .run('INSERT INTO wikis VALUES(?, ?, ?, ?, ?)', [page_name, page_slug, page_content, date.toISOString(), date.toISOString() ], function insert(err, row) {
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
  db
  .run('UPDATE wikis SET page_content = ?, updated_at = ? WHERE rowid = ?', [data.page_content, date.toISOString(), data.rowid], function update(err) {
    if (err) {
      // TODO: setup err logging
      console.log(err);
      res.sendStatus(500);
    } 
    res.send(`row ${this} was updated`);
  })
})

module.exports = router;