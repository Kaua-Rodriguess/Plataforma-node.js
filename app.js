/*console.log('olá mamãe...')
console.log()

document.getElementById('bnt').addEventListener('clik',funcao)
//web scrape->chupa cabra
//crerio
//axios/fetch
// biblioteca de banco de dados: knex,mongoose,sequelize
setTimeout(() => console.log ('A'), 500)
*/
console.log('A')
fetch('https://api.github.com/users/rommelcarneiro')//RESPOSTA HTTP
  .then((resp) => resp.json())//RETORNA O OBJETO JSON
  .then((data) => console.log (data))//CADA then pega a linha de cima, ou seja em cadeia
console.log('B')

//html ui
//json Api