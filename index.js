const express = require('express')
const app = express()
const porta = 3000

const adicionar = require('./routes/adicionar')
const modificar = require('./routes/modificar')
const ver = require('./routes/ver')

console.log("Iniciando")

app.get('/',(req,res)=>{
    console.log('Pedido aceito...')
    res.send('Servidor ok')
})

app.use('/add', adicionar)
app.use('/mod', modificar)
app.use('/ver', ver)

app.listen(porta, ()=>{
    console.log('Esperando...')
})