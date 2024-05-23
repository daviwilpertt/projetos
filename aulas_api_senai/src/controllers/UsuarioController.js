import Conector from "../../database/Conector.js"

class UsuariosController {

    async listar(req, res) {
        try {
            const conexao = await new Conector().getConexao()
            const sql = 'SELECT * FROM usuarios'
            const [resultado] = await conexao.execute(sql)

            res.send(resultado)
        }
        catch (error) {
            res.status(500).send(error)
        }
    }

    async adicionar(req, res) {
        try {
            const novoUsuario = req.body

            if (!novoUsuario.nome || !novoUsuario.senha || !novoUsuario.email) {
                res.status(400).send('todos os campo são obrigatórios')
                return
            }
            
                const conexao = await new Conector().getConexao()
                const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)'
                const [resultado] = await conexao.execute(sql, [novoUsuario.nome, novoUsuario.email, novoUsuario.senha])
                
                res.send({resultado})
            
        }
            catch (error) {
                res.status(500).send(error)
            }
        }

    async atualizar(req, res) {

    }

    async excluir(req, res) {
        try {
            const conexao = await new Conector().getConexao()
            const sql = 'DELETE FROM usuarios WHERE id_usuarios = ?'
            const [resultado] = await conexao.execute(sql, [+req.params.id])

            res.send(resultado)
        }
        catch (error) {
            res.status(500).send(error)
        }
    }
}

export default UsuariosController