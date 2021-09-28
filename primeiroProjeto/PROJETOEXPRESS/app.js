const express = require('express');

const app = express();

// definindo a rota
app.get('/',(req,res)=>res.send("Olá mundo!"))
app.get('/contatos', (req,res)=> res.send("Página contatos"))
//criando ou levantando um servidor express
app.listen(3000, () => console.log("Servidor rodando na porta 3000"))