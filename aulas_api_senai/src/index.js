import express from 'express'
import UsuariosController from './controllers/UsuarioController.js';
const port = 3000;

const app = express();
app.use(express.json());

const usuariosController = new UsuariosController()

app.listen(port, () => {
    console.log(`servidor rodando na porta:${port}`);
})

app.get('/usuarios', usuariosController.listar)
app.post('/usuarios' / usuariosController.adicionar)
app.put('/usuarios', usuariosController.atualizar)
app.delete('/usuarios', usuariosController.excluir)
