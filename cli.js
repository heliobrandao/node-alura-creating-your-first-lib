const chalk = require('chalk');
const pegaArquivo = require('./index.js');
//import pegaArquivo from ('./index');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
  const resultado = await pegaArquivo(caminho[2]);
  console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho);