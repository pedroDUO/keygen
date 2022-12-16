const express = require('express')
const router = express.Router()

router.use('/', (req,res)=>{
    console.log('Adicionar novo desenho!')
    res.send('Sucesso!')
})

module.exports = router