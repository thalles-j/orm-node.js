const database = require('../models');

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;

    }

    async getAllRegisters(){
        return dataSource[this.model].findAll();

    }
    
    async updateRegister(dataUpdade, id){
        const listUpdated = dataSource[this.model].update(dataUpdade, {
                where: { id: id }
            });
            if (listUpdated [0]===0){
                return false;
            }
            return true;
    }
}

module.exports = Services