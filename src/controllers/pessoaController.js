const database = require('../models');

class PessoaController {
  static async getAll(req, res, next) {
    try {
      const listaPessoas = await database.Pessoa.findAll();
      return res.status(200).json(listaPessoas);
    } catch (erro) {
      // repassa para o middleware de erro
      next(erro);
    }
  }
}

module.exports = PessoaController;
