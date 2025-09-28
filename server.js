const express = require('express')
const app = express()

const produtos = [
    {id: 1, nome: 'caneta', preco: 1.99},
    {id: 2, nome: 'lapis', preco: 1.99},
    {id: 3, nome: 'caderno', preco: 1.99},
    {id: 4, nome: 'caneta', preco: 1.99},
    {id: 5, nome: 'caneta', preco: 1.99}
]

app.get('/',(req, res) => {
    res.send('Olá mamâe, tô na Web')//res envia ola mamae como resposta
})

app.get('/api/produtos',(req, res) => {
    resj.setHeader('content-Type','application/json')//informando o tipo de documento que eu vou mandar por meio de uma requisição
    res.send(produtos)
})

app.listen(3000, () => { console.log('Servidor no ar')})

//conhecer bem o PROCESSO HTPP