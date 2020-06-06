const express = require('express')
const router = express.Router()
const db = require('../db');


router.use(function apiLog (req, res, next) {
  console.log('apiLog: ', req.path);
  next();
})

router.get('/wikis', async (req, res) => {
  db.all(`SELECT rowid, page_name, page_slug, page_content FROM wikis`, [], (err, rows) => {
    if(err) {
      console.log(err);
      res.send(err);
    }
    res.json(rows);
  })
})

router.get('/wikis/:id', (req, res) => {
  console.log(req.params.id);
  res.send(`wiki id: ${req.params.id}`)
})

module.exports = router;