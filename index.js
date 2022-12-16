console.log("Iniciando")
const express = require('express')
const app = express()
const porta = 3000

app.get('/',(req,res)=>{
    console.log('Pedido aceito...')
    res.send('Servidor ok')
})

app.listen(porta, ()=>{
    console.log('Esperando...')
})