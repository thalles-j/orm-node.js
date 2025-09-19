const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoasServices = new PessoaServices();

class PessoaController extends Controller {
  constructor(){
    super(pessoasServices)
  }

  async getMatriculas(req , res){
    const { estudanteId } = req.params;
    try{
      const listMatriculas = await pessoasServices.getMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listMatriculas);
    } catch(erro){
      console.error(erro);
      return res.status(500).json({ mensagem: "Erro ao buscar matrículas", erro: erro.message });
    }
  }
}

module.exports = PessoaController;
