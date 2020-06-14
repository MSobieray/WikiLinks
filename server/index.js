const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const api = require('./api');

app.use(bodyParser.json());
app.use('/api', api);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
