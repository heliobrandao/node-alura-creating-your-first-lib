const chalk = require('chalk');
const pegaArquivo = require('./index.js');
const validaURLs = require('./http-validacao')
//import pegaArquivo from ('./index');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
  const resultado = await pegaArquivo(caminho[2]);
  if (caminho[3] === 'validar') {
    console.log(chalk.yellow('links validados'), await validaURLs(resultado));
  } else {
    console.log(chalk.yellow('lista de links'), resultado);
  }
}

processaTexto(caminho);