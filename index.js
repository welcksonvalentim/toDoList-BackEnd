const express = require('express');
require('dotenv').config();

const cors = require('cors');
const rescue = require('express-rescue');
const listControlleres = require('./controller/listControllers');

const app = express();

const { getList } = listControlleres;

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  app.use(cors());
  next();
});

const PORT = process.env.DB_PORT || 3000;

app.get('/list', listControlleres.getList);

app.listen(PORT, () => console.log(`Executando na porta: ${PORT}`));
