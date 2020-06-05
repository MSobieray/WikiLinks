const db = require('./index');

async function getAll(table) {
   
  db.all(`SELECT * FROM wikis`, [], (err, rows) => {
    return rows;
  })
  
  
  // db.serialize(() => {
  //   
  // })
  // const sql = `SELECT * from wikis where page_name='test';`
  // const results = db.get(sql,[],(err, rows ) => {
  //   if (err) {
  //     console.log('err');
  //     throw err;
  //   }
  //   rows.forEach((row) => {
  //     console.log(row.name);
  //   });
  // });
  // return results;
} 

module.exports = {
  getAll
}