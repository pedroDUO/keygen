import './style.css'

const busca = document.getElementById('encontreMe')
const tabela = document.getElementById('tabela')


busca.addEventListener('keyup', (e)=>{
  if(e.key !='Enter')
  {
    return
  }

    parseInput(busca.value)
    busca.value = ""
})

function parseInput(input){
  console.log(input)
  const dados = ['A', 'B', 'C']
  preecherTabela(dados)
}

function preecherTabela(dados){
  tabela.innerHTML=`<table>`
  tabela.innerHTML += `<tr>
                        <th>Código</th>
                        <th>Desenho</th>
                        <th>Versão</th>
                        </tr>
                       ` 

  tabela.innerHTML += `
                      <tr>
                      <td>DRM04S0000A</td>
                      <td>Desenho</td>
                      <td>Versão</td>
                      </tr>`

  tabela.innerHTML+=`</table>`
}