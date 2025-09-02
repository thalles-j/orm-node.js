// src/routes/index.js
const express = require("express");
const pessoas = require("./pessoaRoute");

module.exports = app => {
  app.use(
    express.json(),
    pessoas 
  );
};
