const express = require('express');
const routes = require('./routes');

const app = express();
routes(app);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Erro interno no servidor' });
});


module.exports = app;
