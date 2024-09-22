const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
   // Your logic
});

app.get('/bfhl', (req, res) => {
   res.status(200).json({ operation_code: 1 });
});

module.exports = app;
