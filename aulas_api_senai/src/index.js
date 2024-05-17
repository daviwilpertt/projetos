const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const usuarios = []

app.get('/usuarios', (req, res) => {
    console.log(req.query);
    res.send(usuarios);
});

app.post('/usuarios', (req, res) => {
    console.log(req.body);
    if (!req.body || !req.body.nome || !req.body.email) {
        res.status(400).send('os campos email e nome são obrigatórios!');
        return
    }

    const usuarioExistente = usuarios.find((usu) => usu.email === req.body.email)
    if (usuarioExistente) {
        res.status(409).send('Usuário já existe!')
        return;
    }

    const novoUsuario = { ...req.body, id: +new Date() };

    usuarios.push(novoUsuario);

    res.status(201).send(novoUsuario);
    res.send({ mensagem: `Chamou o POST com o nome: ${req.body.nome}` });

});

app.put('/usuarios', (req, res) => {
    usuarios = usuarios.map((xxx) => {
        if (xxx.id === req.body.id) {
            return req.body;
        }
        else {
            return xxx
        }
    })
    res.send('foi')

    const idUsuario = req.params.idUsuario
    
    console.log(req.headers);
    if (!req.headers.autorizacao) {
        res.status(401).send('Informe o HEADER "autorizacao"');
    } else {
        res.send('Chamou o PUT!');
    }
});

app.delete('/usuarios/:idUsuario', (req, res) => {
    usuarios = usuarios.filter((xxx) => {
        return xxx.id !== +req.params.idUsuario
    })
    res.send('deletou')
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});