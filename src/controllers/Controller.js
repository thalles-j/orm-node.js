class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async getAll(req, res) {
        try {
            const listRegister = await this.entidadeService.getAllRegisters();
            return res.status(200).json(listRegister);
        } catch (erro) {
            console.error(erro);
            return res.status(500).json({ mensagem: "Erro ao buscar registros", erro: erro.message });
        }
    }

    async getById(req, res){
        const {id} = req.params;
        try {
            const listRegister = await this.entidadeService.getByIdRegister(Number(id));
            if(!listRegister){
                return res.status(404).json({ mensagem: `Registro ${id} não encontrado` });
            }
            return res.status(200).json(listRegister);
        } catch (erro) {
            console.error(erro);
            return res.status(500).json({ mensagem: "Erro ao buscar registro", erro: erro.message });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const dataUpdated = req.body;
        try {
            const isUpdated = await this.entidadeService.updateRegister(dataUpdated, Number(id));
            if (!isUpdated) {
                return res.status(404).json({ mensagem: `Registro ${id} não encontrado` });
            }
            return res.status(200).json({ mensagem: `Registro ${id} atualizado com sucesso!` });
        } catch (erro) {
            console.error(erro);
            return res.status(500).json({ mensagem: "Erro ao atualizar registro", erro: erro.message });
        }
    }
};
module.exports = Controller;