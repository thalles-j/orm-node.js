const database = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }
  //pega todos os registros
  async getAllRegisters() {
    return await database[this.model].findAll();
  }
  //pega um registro pelo id
  async getByIdRegister(id){
    return await database[this.model].findBypk(id);
  }
  //cria um registro
  async createRegister(data) {
    return await database[this.model].create(data);
  }
  //atualiza um registro
  async updateRegister(dataUpdate, id) {
    const listUpdated = await database[this.model].update(dataUpdate, {
      where: { id: id }
    });

    if (listUpdated[0] === 0) {
      return false;
    }
    return true;
  }
  //deleta um registro
  async deleteRegister(id) {
    return await database[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
