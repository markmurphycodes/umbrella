const express = require("express");
const axios = require("axios");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", cors(), async (req, res) => {
  // insert code here

  try {
    let page = req.query.page * 10;

    console.log(page);

    let characters = await axios.get(
      `https://www.breakingbadapi.com/api/characters?limit=10&offset=${page}`
    );

    res.status(200).send(characters.data);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
