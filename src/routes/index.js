// src/routes/index.js
const express = require("express");
const pessoas = require("./pessoaRoute");
const cursos = require("./cursoRoute");
const categorias = require("./categoriaRoute");

module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    cursos,
    categorias
  );
};
