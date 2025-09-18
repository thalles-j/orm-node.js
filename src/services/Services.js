const database = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAllRegisters() {
    return await database[this.model].findAll();
  }
  async getByIdRegister(id){
    return await database[this.model].findBypk(id);
  }

  async updateRegister(dataUpdate, id) {
    const listUpdated = await database[this.model].update(dataUpdate, {
      where: { id: id }
    });

    if (listUpdated[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;
