// src/routes/pessoaRoute.js
const { Router } = require('express');
const PessoaController = require('../controllers/pessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getAll);

module.exports = router; // 👈 exporta o router
