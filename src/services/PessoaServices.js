const Services = require('./Services');

class PessoaServices extends Services{
    constructor() {
        super('Pessoa');
    }

    async getMatriculasPorEstudante(id) {
        const estudante = await super.getByIdRegister(id);
        const listMatriculas = await estudante.getAulasMatriculadas();
        return listMatriculas;
    }    
}

module.exports = PessoaServices;