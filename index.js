const express = require('express');
require('dotenv').config();

const cors = require('cors');
const listControlleres = require('./controller/listControllers');

const app = express();
app.use(express.json());
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  app.use(cors());
  next();
});

const PORT = process.env.PORT || 3000;

app.get('/list', listControlleres.getList);
app.post('/list', listControlleres.getListCreated);
app.patch('/list', listControlleres.getListUpdate);
app.delete('/list', listControlleres.getListDelete);

app.listen(PORT, () => console.log(`Executando na porta: ${PORT}`));
