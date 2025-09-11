class Controller {
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }

    async getAll(req,res){
        try{
            const listRegister = await this.entidadeService.getAllRegisters();
                return res.status(200).json(listRegister);
        }catch(erro){

        }
    }
    async update(req,res){
            const {id} = req.params;
            const dataUpdated = req.body;
                try{
                    const isUpdated = await this.entidadeService.updateRegister(dataUpdated, Number(id));
                    if (!isUpdated){
                        return res.status(404).json({mensagem: `registro ${id} não encontrado`});
                    }
                    return res.status(200).json({mensagem: `registro ${id} atualizado com sucesso!`});
                }catch(erro){

                }
    }
}
module.exports = Controller;