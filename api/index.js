const express = require('express');
const axios = require('axios');
const app = express();
const port = 8000;

app.get('/', async (req, res) => {
  // insert code here
  
  res.send('respond');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});