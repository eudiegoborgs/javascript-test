/** 

Exercício 1
Faça um programa que leia 2 números, some - os e exiba uma mensagem com o resultado comparando se os valores são maiores, menores ou iguais a 100.
*/

let um = parseInt(window.prompt('Digite o primeiro valor:', 'Digite aqui!'));
let dois = parseInt(window.prompt('Digite o segundo valor:', 'Digite aqui!'));
let soma = um + dois;

if (soma > 100) {
  alert(soma = " é maior do que 100!");
}
else if (soma == 100) {
  alert(soma = " é igual a 100!");
}
else {
  alert(soma = " é menor do qeu 100!");
}


// Como pedir ao usuario que insira algo no prompt
var um = parseInt(window.prompt('Digite o primeiro valor:', 'Digite aqui!'));

// Continue aqui

/*
Exercício 2
Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.
*/

valor = parseInt(window.prompt('Digite o valor da tabuada para ser impressa'));
for (count = 1; count <= 10; count++) {
  document.write(valor + " X " + count + " = " + (count * valor) + "<br>");
}


/*
Exercício 3
Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.
*/

let vetor = new Array();
//leitura dos valores
for (let j = 0; j < 10; j++) {
  console.log("Digite a " + j + "Posição do vetor:");
  vetor[j] = Number(prompt());
}
//ordenção
for (let i = 0; i < vetor.length; i++) {
  for (let k = i; k > 0 && vetor[k] < vetor[k - 1]; k--) {
    let aux = vetor[k - 1];
    vetor[k - 1] = vetor[k];
    vetor[k] = aux;
  }
}
// exibe o resultado
console.log("O vetor ordenado é" + vetor);


/*
Exercício 4
Escreva um programa que leia dois números e apresente um menu de opções como o mostrado abaixo:

Escolha a opção: A- Soma de 2 números. B- Diferença entre 2 números (maior pelo menor). C- Produto entre 2 números. D- Divisão entre 2 números (o denominador não pode ser zero).

Leia a opção do usuário e execute a operação com os dois números lidos anteriormente. Caso a opção digitada seja inválida, apresente a mensagem de “Opção inválida” para o usuário. Lembre-se de usar funções para organizar seu programa.
*/

function soma(a, b) {
    let res = a + b;
    console.log("A soma é" + res);
  }
  
  function diferenca(a, b) {
    let dif = Math.abs(a - b);
    console.log("A diferença é" + dif);
  }
  
  function produto(a, b) {
    let prod = a * b;
    console.log("O produto é" + prod);
  }
  
  function divisao(a, b) {
    let div;
    if (b === 0) {
      console.log("O denominador não pode ser zero.");
    }
    else {
      div = a / b;
      console.log("A divisão é" + div);
    }
  }
  
  let valor1 = parseInt(window.prompt('Digite o 1o valor:'));
  let valor2 = parseInt(window.prompt('Digite o 2o valor:'));
  
  console.log("Escolha a opção:\nA- Soma de 2 números.\nB- Diferença entre 2 números (maior pelo menor).\nC- Produto entre 2 números.\nD- Divisão entre 2 números (o denominador não pode ser zero).");
  let opcao = prompt();
  switch (opcao.toUpperCase()) {
    case "A": soma(valor1, valor2); break;
    case "B": diferenca(valor1, valor2); break;
    case "C": produto(valor1, valor2); break;
    case "D": divisao(valor1, valor2); break;
    default: console.log("Opção inválida."); break;
  }
  

/*
Exercício 5
Uma eleição possui 2 candidatos a prefeito: o candidato José, do Partido da Felicidade e o candidato João, do Partido da Esperança. Os eleitores votam nos candidatos pelo número do partido. Para votar no candidato José do Partido da Felicidade, precisam digitar o número 1. Para votar no candidato João, do Partido da Esperança, precisam digitar o número 2.

Faça um programa que simule uma urna eletrônica. Para cada eleitor, deve ser lido o número do seu título e em seguida o eleitor poderá digitar o seu voto. A eleição é encerrada quando um valor negativo (menor do que 0) para o título do eleitor é digitado. Informe quantos votos cada candidato teve e qual deles ganhou a eleição.
*/

var titulo, totalJose, totalJoao;
totalJose = 0;
totalJose = 0;
do {
  console.log("Digite o seu titulo de eleitor:");
  titulo = Number(prompt());
  if (titulo >= 0) {
    console.log("Candidatos:\n1 - José, Partido da Felicidade.n\2 - João, Partido da Esperança.");
    var voto = Number(prompt());
    switch (voto) {
      case 1: totalJose++; break;
      case 2: totalJoao++; break;
      default: console.log("Voto nulo.");
    }
    console.log("Parabéns, cidadão!");
  }
} while (titulo >= 0);
// exibir totais
console.log("Resultado:\nJosé teve" + totalJose + "votos.\nJoão teve" + totalJoao + "votos.");
if (totalJose > totalJoao) {
  console.log("José foi eleito.");
}
else if (totalJoao == totalJose) {
  console.log("A eleição empatou, tirem no dado.");
}
else {
  console.log("João foi eleito.");
}


/*
Exercício 6
Faça um programa que peça ao usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.
*/

var tempF, tempC;
tempF = Number(prompt());
tempC = (tempF - 32) * 5 / 9;
console.log("A temperatura em Celsius é" + tempC);


/*
Exercício 7
Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, DANO e SAUDE. A função deve retornar verdadeiro se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e falso caso contrário.
*/

function personagemMorreu(dano, saude) {
    if (dano >= saude) {
      return true;
    }
    else {
      return false;
    }
    console.log("Seu pernsonagem morreu!");
  }

/*
Exercício 8
Temos um vetor de 5 posições, com o nome de 5 itens que nosso herói carrega na mochila. Quando o personagem chega numa porta, queremos detectar automaticamente se ele tem o não uma chave para deixá-lo passar. Crie uma função TemChave que percorre o vetor comparando se cada item tem o nome “chave” e retorne verdadeiro se encontrar alguma. Caso contrário, a função deve retornar falso.
*/

var vetor = ["pa", "pao", "copo", "chave", "mesa"];
function temChave() {
  for (var ind = 0; ind < 5; ind++) {
    if (vetor[ind] === "chave") {
      return true;
    }
  }
  return false;
}


/*
Exercício 9
Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.
*/


function limitaPosicao(posicao) {
    if (posicao > 100) {
      return 100;
    }
    if (posicao < 0) {
      return 0;
    }
    return posicao;
  }
  

/*
Exercício 9
Crie um game de jo-ken-po. A cada rodada, o jogador vê o menu:

Escolha sua jogada: 1 - Papel 2 - Pedra 3 - Tesoura

O jogo lê a opção do jogador e verifica se é válida. Se for inválida, o jogador perde a rodada e o jogo acaba. Se for válida, o computador escolhe uma resposta aleatória, que é mostrada ao jogador. Se o jogador ganhar, ele pode jogar mais uma rodada e sua pontuação aumenta. O jogo acaba quando o jogador perde uma rodada. A pontuação total é mostrada no fim do jogo.
*/

function inicia(){
    let opcao = parseInt(window.prompt("Qual é a opção 1 - Papel 2 - Pedra 3 - Tesoura"));
    let resposta = Math.floor((Math.random() * 3) + 1);
    let opcaoe = "";
    let verificador = true;
  
    if (resposta == 1){
      opcaoe += "A resposta é papel";
    }
    else if (resposta == 2){
      opcaoe += "A respostas é pedra";
    }
    else if (resposta == 3){
      opcaoe += "A resposta é tesoura";
    }
    if (opcao === resposta){
      alert("A resposta é invalida"+opcaoe+".");
    }else if (opcao==1 && resposta == 2){
      alert("A resposta é valida" +opcaoe+".");
      inicia();
    }else if (opcao==2 && resposta==1){
      alert("A resposta é invalida" +opcaoe+".");
    }else if (opcao==3  && resposta==1){
      alert("A resposta é valida" +opcaoe+".");
      inicia();
    }else if (opcao==3 && resposta==2){
      alert("A resposta é invalida"+opcaoe+".");
    }else if(opcao==2 && resposta==3){
      alert("A resposta é valida"+opcaoe+".");
      inicia()
    }else if(opcao==1 && resposta==3){
      alert("A resposta é invalida"+opcaoe+".");
    }
  }
  inicia();